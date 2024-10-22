from langchain.document_loaders import PyMuPDFLoader
from langchain.retrievers import ArxivRetriever


def scrape_pdf_with_pymupdf(url) -> str:
    """Scrape a PDF file from a given URL using PyMuPDF.

    This function takes a URL pointing to a PDF file, loads the PDF using
    the PyMuPDF library, and extracts the text content from it. The
    extracted text is then returned as a string. This is useful for
    applications that require text extraction from PDF documents for further
    processing or analysis.

    Args:
        url (str): The URL of the PDF to scrape.

    Returns:
        str: The text scraped from the PDF.
    """
    loader = PyMuPDFLoader(url)
    doc = loader.load()
    return str(doc)


def scrape_pdf_with_arxiv(query) -> str:
    """Scrape a PDF document from arXiv based on a search query.

    This function utilizes the ArxivRetriever to fetch relevant documents
    from arXiv based on the provided search query. It is designed to
    retrieve a maximum of two documents and return the content of the first
    document found. The function does not impose a limit on the length of
    the document content.

    Args:
        query (str): The query to search for in arXiv.

    Returns:
        str: The text scraped from the first PDF document found.
    """
    retriever = ArxivRetriever(load_max_docs=2, doc_content_chars_max=None)
    docs = retriever.get_relevant_documents(query=query)
    return docs[0].page_content
