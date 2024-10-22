from gpt_researcher import GPTResearcher
import asyncio


async def main():
    """Run a research report based on a specified query.

    This function initializes a researcher with a predefined query and
    report type, conducts research, and generates a report. It demonstrates
    how to utilize the GPTResearcher class to perform research and compile
    findings into a report.

    Returns:
        str: The generated research report based on the query.
    """
    # Query
    query = "What happened in the latest burning man floods?"

    # Report Type
    report_type = "research_report"

    # Initialize the researcher
    researcher = GPTResearcher(query=query, report_type=report_type, config_path=None)
    # Conduct research on the given query
    await researcher.conduct_research()
    # Write the report
    report = await researcher.write_report()
    
    return report


if __name__ == "__main__":
    asyncio.run(main())
