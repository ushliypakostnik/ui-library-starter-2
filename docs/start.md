# Getting Started

## Installation

Скачайте код <span class="nowrap">[ui-library-starter-2](https://github.com/ushliypakostnik/ui-library-starter-2)</span> и оформите его в отдельный репозиторий. При выборе имени для нового репозитория необходимо сразу убедиться в том, что оно не занято на <span class="nowrap">[npmjs.com](https://www.npmjs.com/)</span>. Пусть это будет <code class="nowrap">ui-library-starter-2-test</code>.

Или, в случае, если вы не планируете менять стиль проекта под свои собственные гайды, но, собираетесь поиграться или даже внести вклад в его развитие, например, предложив еще какие-то важные компоненты - сделайте форк, конечно же. Дальнейшие инструкции относятся к первому случаю - пилим свежую либу с кастомным стилем под конкретные задачи - в этом случае многие могут захотеть удалить эту документацию и почти все компоненты, чтобы не выполнять лишнюю кастомизацию.

```
$ npm install
```

## Customization

### README.md

Поправьте первую строчку в <code class="nowrap">@/README.md</code>:

```
# Ui-library-starter 2 test project
```

### package.json

Далее в <code class="nowrap">@/package.json</code> вам необходимо крайне аккуратно переписать актуальной информацией следующие поля, ничего не пропустив:

```json
{
  "name": "ui-library-starter-2-test",
  "description": "UI Library Starter 2 Demonstration",
  "version": "0.1.0",

  "main": "dist/ui-library-starter-2-test.umd.min.js",
  "unpkg": "dist/ui-library-starter-2-test.umd.min.js",
  "jsdelivr": "dist/ui-library-starter-2-test.umd.min.js",

  "scripts": {
    "build": "rimraf ./src/static && cp -r ./docs/.vuepress/public ./src/static && vue-cli-service build --target lib --name ui-library-starter-2-test src/main.js"
  },

  "author": "Levon Gambaryan",
  "license": "MIT",

  "homepage": "",
  "repository": {
    "type": "git",
    "url": "https://github.com/ushliypakostnik/ui-library-starter-2-test"
  },
  "bugs": {
    "url": "https://github.com/ushliypakostnik/ui-library-starter-2-test/issues"
  },

  "keywords": []
}
```

Обратите внимание на имя проекта в конце длинной команды деплоя <code class="nowrap">build</code>!

### Documentation config

Перейдите к документации на VuePress и сконфигурируйте ее под себя <code class="nowrap">@/docs/.vuepress/config.js</code>:

```js
module.exports = {
  lang: 'en-US',
  title: 'UI Library Starter 2',
  description: 'Vue Component UI Library Starter 2',

  theme: '@vuepress/theme-default',
  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter-2-test.git',
    docsDir: 'docs',
    editLink: false,
    locales: {
      '/': {
        nav: [{ text: 'NPM', link: 'https://www.npmjs.com/package/ui-library-starter-2-test' }],
        sidebar: [
          {
            title: `Intro`,
            // collapsable: false,
            children: [
              '/',
              'start',
              'structure',
              'links',
            ],
          },
        ],
      },
    },
  },
};
```
