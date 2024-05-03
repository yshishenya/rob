import aiofiles
import urllib
import uuid
from md2pdf.core import md2pdf
import mistune
from docx import Document
from htmldocx import HtmlToDocx

import datetime
import re
from unidecode import unidecode

def format_filename(text):
    # Извлечение первой строки
    report_name = text.split('\n', 1)[0]
    # Удаление спецсимволов
    report_name = re.sub(r'[^\w\s]', '', report_name)
    # Замена пробелов на подчеркивания и удаление лишних подчеркиваний
    report_name = re.sub(r'\s+', '_', report_name).strip('_')
    # Ограничение названия первыми четырьмя словами
    report_name = '_'.join(report_name.split('_')[:5])
    # Транслитерация с использованием unidecode
    report_name_translit = unidecode(report_name)
    # Добавление даты и уникального идентификатора
    current_date = datetime.datetime.now().strftime("%Y-%m-%d")
    task = uuid.uuid4().hex
    file_path = f"outputs/{current_date}_{report_name_translit}_{task}"
    return file_path

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
    file_path = format_filename(text)
    await write_to_file(file_path + ".md", text)
    return file_path

async def write_md_to_pdf(text: str, filename: str = "") -> str:
    """Converts Markdown text to a PDF file and returns the file path.

    Args:
        text (str): Markdown text to convert.

    Returns:
        str: The encoded file path of the generated PDF.
    """
    file_path = f"format_filename(text).pdf"


    try:
        md2pdf(file_path + ".pdf",
               md_content=text,
               css_file_path="./frontend/assets/pdf_styles.css",
               base_url=None)
        print(f"Report written to {file_path}.pdf")
    except Exception as e:
        print(f"Error in converting Markdown to PDF: {e}")
        return ""

    encoded_file_path = urllib.parse.quote(file_path)
    return encoded_file_path

async def write_md_to_word(text: str, filename: str = "") -> str:
    """Converts Markdown text to a DOCX file and returns the file path.

    Args:
        text (str): Markdown text to convert.

    Returns:
        str: The encoded file path of the generated DOCX.
    """
    file_path = format_filename(text)
    try:
        # Convert report markdown to HTML
        html = mistune.html(text)
        # Create a document object
        doc = Document()
        # Convert the html generated from the report to document format
        HtmlToDocx().add_html_to_document(html, doc)
        # Save the docx document to file_path
        doc.save(f"{file_path}.docx")
        print(f"Report written to {file_path}.docx")

        encoded_file_path = urllib.parse.quote(f"{file_path}.docx")
        return encoded_file_path

    except Exception as e:
        print(f"Error in converting Markdown to DOCX: {e}")
        return ""

