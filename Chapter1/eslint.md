# (д) Eslint. Подсказки об ошибках и автоматическое форматирование кода

[Пример тестов](./eslint-example/)


Для работы с ESLint в VS Code устанавливаем расширение ESLint
```
code --install-extension dbaeumer.vscode-eslint
```

Официальный сайт ESlint https://eslint.org - всегда использовать его для боле етонкой настройки.

Для начала работы с ESLint необходимо установить в проекте:

```
npm install eslint
```

```
npm init @eslint/config
```


Для того чтобы ESLint автоматически помогал форматировать код, необходимо изменить настройки VS Code. 

Для этого 
* переходим в Settings (<kbd>Ctrl</kbd> + <kbd>,</kbd>)
* набираем в поисковой строке - ```Format on Save``` и ставим галочку
* ищес ```Default Formatter``` и выставляем значение ESLint

Все эти настройки можно увидеть в Настройках JSON формата. Будет выглядеть следующим образом:
```
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
```

Так же можно добавить следующие строки в настройки JSON, чтобы отрабатывалась автоматическое форматирование через ESLint:
```
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": ["javascript"]
```

теперь после сохранения JavaScript файла код будет автоматически отформатирован согласно настройкам ESLint.