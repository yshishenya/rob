"""Text processing functions"""
import urllib
from typing import Dict, Generator, Optional

from selenium.webdriver.remote.webdriver import WebDriver

from config import Config
from gpt_researcher_old.retriever.llm_utils import create_chat_completion
import os
from md2pdf.core import md2pdf


def split_text(text: str, max_length: int = 8192) -> Generator[str, None, None]:
    """Split text into chunks of a maximum specified length.

    This function takes a string of text and splits it into smaller chunks,
    each of which does not exceed the specified maximum length. The text is
    divided based on paragraphs, ensuring that each chunk contains complete
    paragraphs whenever possible. If a paragraph exceeds the maximum length,
    it will be yielded as a separate chunk.

    Args:
        text (str): The text to split.
        max_length (int?): The maximum length of each chunk.
            Defaults to 8192.

    Yields:
        str: The next chunk of text.
    """
    paragraphs = text.split("\n")
    current_length = 0
    current_chunk = []

    for paragraph in paragraphs:
        if current_length + len(paragraph) + 1 <= max_length:
            current_chunk.append(paragraph)
            current_length += len(paragraph) + 1
        else:
            yield "\n".join(current_chunk)
            current_chunk = [paragraph]
            current_length = len(paragraph) + 1

    if current_chunk:
        yield "\n".join(current_chunk)


def summarize_text(
    fast_llm_model: str, summary_token_limit: int, llm_provider: str, url: str, text: str, question: str, driver: Optional[WebDriver] = None
) -> str:
    """Summarize text using the OpenAI API.

    This function takes a piece of text and summarizes it using a specified
    fast LLM model from the OpenAI API. It splits the text into manageable
    chunks, processes each chunk to generate summaries, and then combines
    these summaries into a final output. The function can also utilize a web
    driver to scroll through the content if necessary.

    Args:
        fast_llm_model (str): The fast LLM model e.g gpt3.5-turbo-16k.
        summary_token_limit (int): The summary token limit.
        llm_provider (str): The LLM provider.
        url (str): The URL of the text.
        text (str): The text to summarize.
        question (str): The question to ask the model.
        driver (WebDriver?): The webdriver to use to scroll the page.

    Returns:
        str: The summary of the text.
    """
    if not text:
        return "Error: No text to summarize"

    summaries = []
    chunks = list(split_text(text))
    scroll_ratio = 1 / len(chunks)

    print(f"Summarizing url: {url} with total chunks: {len(chunks)}")
    for i, chunk in enumerate(chunks):
        if driver:
            scroll_to_percentage(driver, scroll_ratio * i)

        #memory_to_add = f"Source: {url}\n" f"Raw content part#{i + 1}: {chunk}"

        #MEMORY.add_documents([Document(page_content=memory_to_add)])

        messages = [create_message(chunk, question)]

        summary = create_chat_completion(
            model=fast_llm_model,
            messages=messages,
            max_tokens=summary_token_limit,
            llm_provider=llm_provider
        )
        summaries.append(summary)
        #memory_to_add = f"Source: {url}\n" f"Content summary part#{i + 1}: {summary}"

        #MEMORY.add_documents([Document(page_content=memory_to_add)])

    combined_summary = "\n".join(summaries)
    messages = [create_message(combined_summary, question)]

    final_summary = create_chat_completion(
        model=fast_llm_model,
        messages=messages,
        max_tokens=summary_token_limit,
        llm_provider=llm_provider,
    )
    print("Final summary length: ", len(combined_summary))
    print(final_summary)

    return final_summary


def scroll_to_percentage(driver: WebDriver, ratio: float) -> None:
    """Scroll to a specified percentage of the webpage.

    This function uses the provided WebDriver to scroll the webpage to a
    specific vertical position based on the given ratio. The ratio should be
    a float value between 0 and 1, where 0 represents the top of the page
    and 1 represents the bottom. If the ratio is outside this range, a
    ValueError is raised.

    Args:
        driver (WebDriver): The webdriver to use for scrolling.
        ratio (float): The percentage of the page to scroll to, expressed
            as a float between 0 and 1.

    Raises:
        ValueError: If the ratio is not between 0 and 1.
    """
    if ratio < 0 or ratio > 1:
        raise ValueError("Percentage should be between 0 and 1")
    driver.execute_script(f"window.scrollTo(0, document.body.scrollHeight * {ratio});")


def create_message(chunk: str, question: str) -> Dict[str, str]:
    """Create a message for the chat completion.

    This function constructs a message formatted for a chat completion
    system. It takes a chunk of text and a question, then formats them into
    a structured message that instructs the chat system on how to summarize
    the provided text based on the given question. The message emphasizes
    the importance of including all factual information and specifies that
    the response must be in Russian.

    Args:
        chunk (str): The chunk of text to summarize.
        question (str): The question to answer.

    Returns:
        Dict[str, str]: The message to send to the chat completion.
    """
    return {
        "role": "user",
        "content": f'"""{chunk}"""\n'
        f'Using the above text, summarize it based on the following task or query: "{question}".\n'
        f'If the query cannot be answered using the text, YOU MUST summarize the text in short.\n'
        f'Include all factual information such as numbers, stats, quotes, etc if available.'
        f'You must write in Russian only.'
    }

def write_to_file(filename: str, text: str) -> None:
    """Write text to a specified file.

    This function opens a file in write mode and writes the provided text to
    it. If the file already exists, it will be overwritten. The function
    ensures that the file is properly closed after writing.

    Args:
        filename (str): The name of the file to write to.
        text (str): The text content to be written to the file.
    """
    with open(filename, "w") as file:
        file.write(text)

async def write_md_to_pdf(task: str, path: str, text: str) -> None:
    """Write Markdown text to a PDF file.

    This function takes a task name, a file path, and the text content in
    Markdown format. It writes the Markdown content to a file with a .md
    extension and then converts that file into a PDF format. The function
    also prints a confirmation message indicating that the task has been
    successfully written to the PDF file.

    Args:
        task (str): The name of the task, which will be used as the filename.
        path (str): The directory path where the Markdown file will be saved.
        text (str): The Markdown text content to be written to the file.

    Returns:
        None: This function does not return any value.
    """

    file_path = f"{path}/{task}"
    write_to_file(f"{file_path}.md", text)
    md_to_pdf(f"{file_path}.md", f"{file_path}.pdf")
    print(f"{task} written to {file_path}.pdf")

    encoded_file_path = urllib.parse.quote(f"{file_path}.pdf")

    return encoded_file_path

def read_txt_files(directory):
    """Read and concatenate the contents of all text files in a specified
    directory.

    This function scans the given directory for files with a '.txt'
    extension, reads their contents, and concatenates them into a single
    string. Each file's content is separated by a newline character. This is
    useful for aggregating text data from multiple text files for further
    processing or analysis.

    Args:
        directory (str): The path to the directory containing the text files.

    Returns:
        str: A single string containing the concatenated contents of all text files.
    """

    all_text = ''

    for filename in os.listdir(directory):
        if filename.endswith('.txt'):
            with open(os.path.join(directory, filename), 'r') as file:
                all_text += file.read() + '\n'

    return all_text


def md_to_pdf(input_file, output_file):
    """Convert a Markdown file to a PDF file.

    This function utilizes the `md2pdf` library to convert a specified
    Markdown file into a PDF format. The input file path and the desired
    output file path must be provided. The function does not require any
    additional parameters such as CSS file paths or base URLs, but these can
    be set to None if not needed.

    Args:
        input_file (str): The path to the input Markdown file.
        output_file (str): The path where the output PDF file will be saved.

    Returns:
        None: This function does not return a value; it performs the conversion
        and saves the output directly to the specified file.
    """

    md2pdf(output_file,
           md_content=None,
           md_file_path=input_file,
           css_file_path=None,
           base_url=None)
