<template><h1 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>.
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
├─ colors.jpg // image for README
├─ jest.config.js // jest configuration
├─ package.json // project configuration
├─ README.md
├─ tsconfig.json // tslint configuration
└─ vue.config.js // vue configuration
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div></template>
