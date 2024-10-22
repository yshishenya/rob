"""HTML processing functions"""
from __future__ import annotations

from bs4 import BeautifulSoup
from requests.compat import urljoin


def extract_hyperlinks(soup: BeautifulSoup, base_url: str) -> list[tuple[str, str]]:
    """Extract hyperlinks from a BeautifulSoup object.

    This function takes a BeautifulSoup object and a base URL as input, and
    extracts all hyperlinks (anchor tags) found within the HTML. It returns
    a list of tuples, where each tuple contains the text of the hyperlink
    and the absolute URL formed by joining the base URL with the hyperlink's
    href attribute.

    Args:
        soup (BeautifulSoup): The BeautifulSoup object containing the HTML.
        base_url (str): The base URL to resolve relative hyperlinks.

    Returns:
        list[tuple[str, str]]: A list of tuples containing the hyperlink text
        and the corresponding absolute URL.
    """
    return [
        (link.text, urljoin(base_url, link["href"]))
        for link in soup.find_all("a", href=True)
    ]


def format_hyperlinks(hyperlinks: list[tuple[str, str]]) -> list[str]:
    """Format hyperlinks for user display.

    This function takes a list of tuples, where each tuple contains a link
    text and a corresponding URL. It formats each hyperlink into a string
    that combines the link text and the URL in a user-friendly format. The
    output is a list of formatted strings that can be easily displayed to
    users.

    Args:
        hyperlinks (list[tuple[str, str]]): A list of tuples containing link text and URL pairs.

    Returns:
        list[str]: A list of formatted hyperlinks as strings.
    """
    return [f"{link_text} ({link_url})" for link_text, link_url in hyperlinks]
