import aiofiles
import urllib
from md2pdf.core import md2pdf
import mistune
from docx import Document
from htmldocx import HtmlToDocx



async def write_to_file(filename: str, text: str) -> None:
    """Asynchronously write text to a file in UTF-8 encoding.

    Args:
        filename (str): The filename to write to.
        text (str): The text to write.
    """
    # Convert text to UTF-8, replacing any problematic characters
    text_utf8 = text.encode('utf-8', errors='replace').decode('utf-8')

    async with aiofiles.open(filename, "w", encoding='utf-8') as file:
        await file.write(text_utf8)

async def write_text_to_md(text: str, filename: str = "") -> str:
    """Writes text to a Markdown file and returns the file path.

    Args:
        text (str): Text to write to the Markdown file.

    Returns:
        str: The file path of the generated Markdown file.
    """
    try:
        if filename == "":
            raise ValueError("Filename cannot be empty.")
        await write_to_file(filename+".md", text)
        encoded_file_path = urllib.parse.quote(filename+".md")
        return encoded_file_path
    except Exception as e:
        print(f"Ошибка при записи в Markdown файл: {e}")
        return ""

async def write_md_to_pdf(text: str, filename: str = "") -> str:
    """Converts Markdown text to a PDF file and returns the file path.

    Args:
        text (str): Markdown text to convert.

    Returns:
        str: The encoded file path of the generated PDF.
    """
    # Check if filename is provided
    if not filename:
        raise ValueError("Filename cannot be empty")

    #file_path = format_filename(text) + ".pdf"


    try:
        md2pdf(filename+".pdf",
               md_content=text,
               css_file_path="./frontend/assets/pdf_styles.css",
               base_url=None)
        print(f"Report written to {filename}.pdf")
    except Exception as e:
        print(f"Error in converting Markdown to PDF: {e}")
        return ""

    encoded_file_path = urllib.parse.quote(filename+".pdf")
    return encoded_file_path
async def write_md_to_word(text: str, filename: str) -> str:
    """Converts Markdown text to a DOCX file and returns the file path.

    Args:
        text (str): Markdown text to convert.

    Returns:
        str: The encoded file path of the generated DOCX.
    """
    # Check if filename is provided
    if not filename:
        raise ValueError("Filename cannot be empty")

    try:
        # Convert report markdown to HTML
        html = mistune.html(text)
        # Create a document object
        doc = Document()
        # Convert the html generated from the report to document format
        HtmlToDocx().add_html_to_document(html, doc)
        # Save the docx document to file_path
        doc.save(f"{filename}.docx")
        print(f"Report written to {filename}.docx")

        encoded_file_path = urllib.parse.quote(f"{filename}.docx")
        return encoded_file_path

    except Exception as e:
        print(f"Error in converting Markdown to DOCX: {e}")
        return ""

