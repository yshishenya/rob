/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "rob", "index.html", [
    [ "auth", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html", [
      [ "Руководство по использованию API", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md1", [
        [ "Введение", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md2", null ],
        [ "Аутентификация", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md4", [
          [ "Получение токенов", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md5", null ],
          [ "Пример успешного ответа", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md6", null ],
          [ "Описание полей ответа", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md7", null ]
        ] ],
        [ "Использование access_token", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md9", [
          [ "Пример подключения к WebSocket", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md10", null ],
          [ "Пример использования WebSocket на Python", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md11", null ]
        ] ],
        [ "Обновление токена доступа", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md13", [
          [ "Использование refresh_token", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md14", null ],
          [ "Пример успешного ответа", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md15", null ],
          [ "Описание ошибок", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md16", null ]
        ] ],
        [ "Описание системы авторизации", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md18", [
          [ "Общая структура", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md19", null ],
          [ "Модуль auth.py", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md20", null ],
          [ "Модели Pydantic", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md21", null ],
          [ "Функции для работы с токенами", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md22", null ],
          [ "API Маршруты", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md23", [
            [ "Авторизация пользователя", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md24", null ],
            [ "Обновление токена доступа", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md25", null ],
            [ "Создание нового пользователя (только для администраторов)", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md26", null ],
            [ "Удаление пользователя (только для администраторов)", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md27", null ],
            [ "Смена пароля пользователя (только для администраторов)", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md28", null ],
            [ "Изменение данных пользователя (только для администраторов)", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md29", null ],
            [ "Получение списка пользователей (только для администраторов)", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md30", null ]
          ] ]
        ] ],
        [ "Инициализация приложения", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md32", [
          [ "Модуль server.py", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md33", null ],
          [ "Инструкция по реализации логаута", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md34", null ]
        ] ],
        [ "Заключение", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md36", null ]
      ] ]
    ] ],
    [ "Detailed Reports", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2report__type_2detailed__report_2README.html", null ],
    [ "Contributor Covenant Code of Conduct", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html", [
      [ "Our Pledge", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md39", null ],
      [ "Our Standards", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md40", null ],
      [ "Enforcement Responsibilities", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md41", null ],
      [ "Scope", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md42", null ],
      [ "Enforcement", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md43", null ],
      [ "Enforcement Guidelines", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md44", [
        [ "Correction", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md45", null ],
        [ "Warning", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md46", null ],
        [ "Temporary Ban", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md47", null ],
        [ "Permanent Ban", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md48", null ]
      ] ],
      [ "Attribution", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2CODE__OF__CONDUCT.html#autotoc_md49", null ]
    ] ],
    [ "Contribute", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2contribute.html", null ],
    [ "Examples", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2examples_2examples.html", null ],
    [ "Frequently Asked Questions", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2faq.html", null ],
    [ "Introduction", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2config.html", null ],
    [ "Agent Example", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2example.html", null ],
    [ "Getting Started", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html", [
      [ "Quickstart", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md83", null ],
      [ "Using Virtual Environment or Poetry", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md84", [
        [ "Virtual Environment", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md85", [
          [ "Establishing the Virtual Environment with Activate/Deactivate configuration", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md86", null ],
          [ "Install the dependencies for a Virtual environment", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md87", null ]
        ] ],
        [ "Poetry", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md88", [
          [ "Establishing the Poetry dependencies and virtual environment with Poetry version ~1....", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md89", null ],
          [ "Activate the virtual environment associated with a Poetry project", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md90", null ]
        ] ],
        [ "Run the app", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md91", null ]
      ] ],
      [ "Try it with Docker", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2getting-started.html#autotoc_md92", null ]
    ] ],
    [ "Introduction", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html", [
      [ "Why GPT Researcher?", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html#autotoc_md94", null ],
      [ "Architecture", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html#autotoc_md95", null ],
      [ "Demo", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html#autotoc_md96", null ],
      [ "Tutorials", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html#autotoc_md97", null ],
      [ "Features", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2introduction.html#autotoc_md98", null ]
    ] ],
    [ "LangGraph", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html", [
      [ "Use case", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md100", null ],
      [ "The Multi Agent Team", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md101", null ],
      [ "How it works", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md102", [
        [ "Architecture", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md103", null ],
        [ "Steps", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md104", null ]
      ] ],
      [ "How to run", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md105", null ],
      [ "Usage", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md106", null ],
      [ "To Deploy", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2langgraph.html#autotoc_md109", null ]
    ] ],
    [ "Configure LLM", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html", [
      [ "Custom OpenAI", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md111", [
        [ "Custom OpenAI API LLM", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md112", null ],
        [ "Custom OpenAI API Embedding", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md113", null ],
        [ "Azure OpenAI", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md114", null ]
      ] ],
      [ "Ollama", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md115", null ],
      [ "Groq", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md116", [
        [ "Sign up", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md117", null ],
        [ "Update env vars", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md118", null ]
      ] ],
      [ "Anthropic", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md119", null ],
      [ "Mistral", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md120", null ],
      [ "Together AI", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md121", null ],
      [ "HuggingFace", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md122", null ],
      [ "Google Gemini", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2llms.html#autotoc_md123", null ]
    ] ],
    [ "PIP Package", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html", [
      [ "Steps to Install GPT Researcher 🛠️", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md125", null ],
      [ "Example Usage 📝", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md126", null ],
      [ "Specific Examples 🌐", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md127", [
        [ "Example 1: Research Report 📚", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md128", null ],
        [ "Example 2: Resource Report 📋", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md129", null ],
        [ "Example 3: Outline Report 📝", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md130", null ]
      ] ],
      [ "Integration with Web Frameworks 🌍", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md131", [
        [ "FastAPI Example", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md132", null ],
        [ "Flask Example", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2pip-package.html#autotoc_md133", null ]
      ] ]
    ] ],
    [ "Roadmap", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2roadmap.html", null ],
    [ "Tailored Research", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2tailored-research.html", null ],
    [ "Troubleshooting", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2gpt-researcher_2troubleshooting.html", null ],
    [ "Welcome", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2docs_2welcome.html", null ],
    [ "Website", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2README.html", [
      [ "Prerequisites", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2README.html#autotoc_md178", null ],
      [ "Installation", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2README.html#autotoc_md179", null ],
      [ "Local Development", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2docs_2README.html#autotoc_md180", null ]
    ] ],
    [ "🔎 GPT Researcher", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2gpt__researcher_2README.html", null ],
    [ "LangGraph x GPT Researcher", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html", [
      [ "Use case", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md184", null ],
      [ "The Multi Agent Team", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md185", null ],
      [ "How it works", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md186", [
        [ "Architecture", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md187", null ],
        [ "Steps", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md188", null ]
      ] ],
      [ "How to run", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md189", null ],
      [ "Usage", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md190", null ],
      [ "To Deploy", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2multi__agents_2README.html#autotoc_md193", null ]
    ] ],
    [ "🔎 GPT Researcher", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html", [
      [ "为什么选择GPT Researcher?", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md195", null ],
      [ "架构", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md196", null ],
      [ "演示", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md197", null ],
      [ "教程", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md198", null ],
      [ "特性", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md199", null ],
      [ "📖 文档", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md200", null ],
      [ "快速开始", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md201", null ],
      [ "🚀 贡献", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md202", null ],
      [ "✉️ 支持 / 联系我们", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md203", null ],
      [ "🛡 免责声明", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README-zh__CN.html#autotoc_md204", null ]
    ] ],
    [ "README", "md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2README.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"actions_8py.html",
"classbackend_1_1report__type_1_1basic__report_1_1basic__report_1_1BasicReport.html#a834f92d507ea35ac8028100e6ba0ff84",
"classgpt__researcher_1_1llm__provider_1_1google_1_1google_1_1GoogleProvider.html#ac7710089e3ce8c6adf7de660710c43d9",
"classgpt__researcher_1_1retrievers_1_1google_1_1google_1_1GoogleSearch.html#aa4661bd4b11e42be596baaba2870ba46",
"db_8py.html#a2c81f46a6c0833e0e7d1b21bd816234b",
"md__2tmp_2github__repos__arch__doc__gen_2yshishenya_2rob_2backend_2auth_2auth.html#autotoc_md27",
"namespacegpt__researcher_1_1llm__provider_1_1openai.html",
"setup_8py.html#a443be2d01fd539bf6761aff70724d876"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';