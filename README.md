# Vue Components UI Library Starter 2

Стартовый пример для быстрого создания переиспользуемых модулей-библиотек с состоянием, темезацией, локализацией, документацией и режимом разработки (на Vue3+TS/Vuex4/VuePress2/i18n)

[Package on NPM](https://www.npmjs.com/package/ui-library-starter-2)

[Documentation](https://ui-library-starter-2.netlify.app)

[Пример использующего модуль проекта - репо:](https://github.com/ushliypakostnik/ui-library-2-test)

[Пример использующего модуль проекта - демостенд:](https://ui-library-2-test.vercel.app/)

![Colors](https://github.com/ushliypakostnik/ui-library-starter-2/blob/master/themes.jpg)

### Project setup
```
$ npm install
```

### Development documentation
```
$ npm run docs:dev
```

### Build documentation
```
$ npm run docs:build
```

### Use the sandbox (not documentation)

Используйте специальный режим для разработки и тестирования модуля-библиотеки. Для того чтобы переключиться в него - выставите флаг ```isDevelopmentModuleMode``` в значение ```true``` главном файле проекта @/src/main.ts:

```ts
// ATTENTION! Set to true if you want
// to develop a module (not documentation)
// and false before publishing for use in projects
const isDevelopmentModuleMode = true;
if (isDevelopmentModuleMode) {
  console.log('Start development module!');
  ...
}
```

```
$ npm run serve
```

### Compiles and minifies for production
```
$ npm run build
```

### Publish to NPM
```
$ npm version patch
$ npm publish
```
