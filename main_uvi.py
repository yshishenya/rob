from backend.server import app
from dotenv import load_dotenv
import os
import uvicorn

load_dotenv()  # Loads environment variables from .env file

#временныое включение логов

LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "default": {
            "class": "logging.StreamHandler",
            "formatter": "default",
            "stream": "ext://sys.stdout"  # Use standard output
        }
    },
    "formatters": {
        "default": {
            "()": "logging.Formatter",
            "fmt": "%(levelname)s %(name)s@%(lineno)d %(message)s",
        },
    },
    "loggers": {
        "": {  # root logger
            "handlers": ["default"],
            "level": "DEBUG"
        }
    }
}


if __name__ == "__main__":

    #port = int(os.getenv('APP_PORT', 8034))  # Gets the port from the environment variable or uses 8034 as default
    port = int(os.getenv('APP_PORT_UVI', 9778))
    uvicorn.run(app, host="0.0.0.0", port=port, log_config=LOGGING_CONFIG)
