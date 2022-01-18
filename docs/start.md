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

### Connecting fonts

Исходный проект библиотеки использует шрифт Ubuntu и вам необходимо подключить шрифт который диктует ваше руководство по стилю. Предположим, это Open Sans и у вас есть его веб-фонт.

Перепишите имя шрифта и переменные начертаний если требуется в файле <code class="nowrap">~/src/stylus/utils/\_typography.styl</code>:

```stylus
$font-family = "Open Sans"

$font-weight = {
  regular: 400,
  bold: 700,
}
```

Поместите папку с правильным шрифтом рядом с папкой <code class="nowrap">/Ubuntu</code> в <code class="nowrap">@/src/static/fonts/</code>.

Пропишите правильные импорты и пути в файле препроцессора для типографики <code class="nowrap">~/src/stylus/utils/_typography.styl</code>:

```stylus
// Import fonts
//////////////////////////////////////////////////////

@font-face
  font-family $font-family
  src url("../../static/fonts/OpenSans/OpenSans-Regular.eot")
  src local("OpenSans Regular"), local("OpenSans-Regular"),
    url("../../static/fonts/OpenSans/OpenSans-Regular.eot?#iefix") format("embedded-opentype"),
    url("../../static/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"),
    url("../../static/fonts/OpenSans/OpenSans-Regular.woff") format("woff"),
    url("../../static/fonts/OpenSans/OpenSans-Regular.ttf") format("truetype")
  font-weight $font-weight.regular
  font-style normal

@font-face
  font-family $font-family
  src url("../../static/fonts/OpenSans/OpenSans-Bold.eot")
  src local("OpenSans Bold"), local("OpenSans-Bold"),
    url("../../static/fonts/OpenSans/OpenSans-Bold.eot?#iefix") format("embedded-opentype"),
    url("../../static/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"),
    url("../../static/fonts/OpenSans/OpenSans-Bold.woff") format("woff"),
    url("../../static/fonts/OpenSans/OpenSans-Bold.ttf") format("truetype")
  font-weight $font-weight.bold
  font-style normal
```

Поправтьте имя шрифта в таге <code>body</code> в секции стилей компонента для разработки <code class="nowrap">@/src/Development.vue</code>:

```vue
...

<style lang="stylus">
:root
  scroll-behavior smooth

body
  font-family "Open Sans", sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  overflow-x hidden
</style>

```

Удалите директорию со старым шрифтом <code class="nowrap">@/src/static/fonts/Ubuntu</code>.

### Сleaning project

Если вы хотите получить полностью чистую документацию - произведите следующую очистку папок и файлов.

Удалите все папки и файлы в <code class="nowrap">@/docs/</code> кроме директории <code class="nowrap">@/docs/.vuepress</code> и файла <code class="nowrap">@/docs/README.md</code>, который нужно оставить, но очистить:

```
# UI Library

...
```

Вернитесь к конфигурации документации и отразите изменения в <code class="nowrap">@/docs/.vuepress/config.js</code>.

### Style setting

Запустите разработку документации командой:

```
$ npm run docs:dev
```

Ознакомьтесь с разделом [Constants](https://ui-library-starter-2.netlify.app/constants/stylebase.html) документации к исходному проекту.

Вам необходимо настроить препроцессор вашей библиотеки в точном соответсвии с вашим руководством по фирменному стилю.

## Adding a component

После того как стили библиотеки настроены вы можете добавлять свои специфические компоненты.

Выберете имя для компонента в PascalCase стиле написания, предположим это <code class="nowrap">ComponentName</code>.

Добавьте директорию <code class="nowrap">@/src/components/ComponentName</code>.

Добавьте в нее индексный файл c импортом-экспортом:

<code class="nowrap">@/src/components/ComponentName/index.ts</code>

```ts
import ComponentName from './ComponentName.vue';

export default ComponentName;
```

И сам компонент:

<code class="nowrap">@/src/components/ComponentName/ComponentName.vue</code>

```vue
<template>
  <div
    class="component-name"
    :class="{
      '.component-name__element--modifier1': prop1,
      '.component-name__element--modifier2': prop2,
    }"
  >
    This is test component!!!
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentName',

  props: {
    prop1: {
      type: Boolean,
      required: true,
    },
    prop2: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.component-name
  background $colors.primary // test styles
  // add adaptive
  +$mobile()
    display block

  &__element
    $text("natasha") // add typography

    &--modifier1
      color $colors.primary // add good color

    &--modifier2
      color $colors.secondary
</style>
```

Добавьте экспорт в индексный файл библиотеки <code class="nowrap">@/src/components/index.ts</code>:

```ts
export { default as ComponentName } from './ComponentName';
```

Добавьте документацию компонента в файл <code class="nowrap">@/docs/components/component-name.md</code>:

```markdown
# ComponentName

## Description

This is new custom component.

## Connection

<template>
  <ComponentName prop1="Boolean(required)" />
</template>

## API

### Props

| **Name**  | **Type** | **Description** | **Default** |
| :-------- | :------- | :-------------- | ----------: |
| **prop1** | Boolean  | -               |  (required) |
| **prop2** | Boolean  | -               |     `false` |

...
```

И далее - рендер-тест и исходный код по аналогии с другими файлами.

Добавьте компонент в конфигурацию VuePress <code class="nowrap">@/docs/.vuepress/config.js</code>:

```js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        text: `Components`,
        collapsible: true,
        children: [
          {
            text: `ComponentName`,
            link: '/components/component-name',
          },
        ],
      },
    ],
  },
};
```

## Using third party modules

::: warning
Используйте только относительные пути для импорта чего-либо в typescript ваших компонентов или модулей хранилища Vuex. Не используйте «абсолютные» алиасы (в контексте дочернего проекта, данный импорт будет искать зависимость в директории @/... проекта, а не библиотеки):
:::

```vue
<script>
import Icon from '../Icon/Icon';

export default defineComponent({
  name: 'ComponentName',

  components: {
    Icon,
  },
});
</script>
```

```ts
import { Module } from 'vuex';

// Types
import { IStore, ILayout } from '../../models/store';

const initialState: ILayout = {
  // ...
};

const ModuleName: Module<ILayout, IStore> = {
  namespaced: true,

  state: initialState,

  getters: {
    // ...
  },

  actions: {
    // ...
  },

  mutations: {
    // ...
  },
};

export default ModuleName;
```

В реальных проектах вам потребуется очень часто закрывать «самые дорогие требования» с помощью аккуратно подобранных подходящих готовых решений. В таких случаях логично будет создавать обертку над чужим модулем, предоставляющую всю необходимую кастомизацию.

Так как мы используем глобальные стили собственной кастомизации модуля - невозможно будет защитить стили перекастомизации в SFC-обертке с помощью <code class="nowrap">scoped</code>:

```vue
<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

// Customization
// ...
</style>
```

## Library publishing

Зарегистрируйтесь на <span class="nowrap">[npmjs.com](https://www.npmjs.com/)</span> и подтвердите регистрацию (дождитесь письма на почту).

```
$ npm run build
$ npm version patch
$ npm publish
```


## Connecting to projects

Вы можете либо использовать стартовый шаблон для новых проектов <span class="nowrap">[ui-library-start](https://github.com/ushliypakostnik/ui-library-2-test)</span>, тогда вам придется заменить библиотеку:

```
$ npm uninstall ui-library-starter-2 --save-dev
$ npm install ui-library-starter-2-test --save-dev
```

Либо установить библиотеку как любой другой модуль в любой другой проект:

```
$ npm install ui-library-starter-2-test --save-dev
```


