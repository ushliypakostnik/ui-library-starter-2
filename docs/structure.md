# Structure

```
.
├─ docs/ // documentation folder
│  ├── .vuepress/ // VuePress2
│  │   ├─ styles/ // customization of documentation
│  │   │  └─ index.scss
│  │   ├─ config.js // configuration
│  ├─ components/ // library components documentation folder
│  │  ├─ layout.md
│  │  └─ ...
│  ├─ constants/ // library styles documentation folder
│  │  ├─ breakpoints.md
│  │  ├─ colors.md
│  │  ├─ others.md
│  │  ├─ stylebase.md
│  │  └─ typography.md
│  ├─ links.md // useful reading links
│  ├─ README.md // homepage
│  ├─ start.md // getting started
│  └─ structure.md // structure
├─ src/ // source folder
│  ├─ components/
│  │  ├─ Layout
│  │  │  ├─ Layout.js
│  │  │  └─ Layout.vue
│  │  └─ ...
│  ├─ models/ // types
│  │  ├─ store/
│  │  └─ utils/
│  ├─ static/ // after build fonts will be copied here
│  │  └─ fonts/
│  │     └─ ...
│  ├─ store/ // vuex store
│  │  ├─ modules/
│  │  │  └─ layout.ts
│  │  └─ index.ts
│  ├─ stylus/
│  │  ├─ core
│  │  │  ├─ _animations.styl // keyframes and Vue animationss classes
│  │  │  └─ _base.styl // normalize
│  │  ├─ utils
│  │  │  ├─ _mixins.styl
│  │  │  ├─ _placeholders.styl
│  │  │  ├─ _typography.styl // Use one, only one, Karl, a universal mixin for all cases!
│  │  │  └─ _variables.styl
│  │  └─ _stylebase.styl // main file of stylus 
│  ├─ utils/ // scripts
│  │  ├─ constants.ts // constants
│  │  ├─ screen-helper.ts // adaptive viewport
│  │  └─ ...
│  ├─ Development.vue // app component for development mode
│  ├─ main.ts // library export and development mode switch
│  └─ shims-vue.d.ts // vue types
├─ tests/
│  └─ unit/
│     └─ example.spec.ts
├─ .browserslistrc // configuration of supported browsers
├─ .editorconfig // configuration for editors
├─ .eslintrc.js // linter configuration
├─ .gitignore // git ignore
├─ .prettierrc // prettier configuration
├─ babel.config.js // babel configuration
├─ themes.jpg // image for README
├─ jest.config.js // jest configuration
├─ package.json // project configuration
├─ README.md
├─ tsconfig.json // tslint configuration
└─ vue.config.js // vue configuration
```
