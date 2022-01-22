import{c as n}from"./app.3da3a17b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="structure" tabindex="-1"><a class="header-anchor" href="#structure" aria-hidden="true">#</a> Structure</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.
\u251C\u2500 docs/ // documentation folder
\u2502  \u251C\u2500\u2500 .vuepress/ // VuePress2
\u2502  \u2502   \u251C\u2500 styles/ // customization of documentation
\u2502  \u2502   \u2502  \u2514\u2500 index.scss
\u2502  \u2502   \u251C\u2500 config.js // configuration
\u2502  \u251C\u2500 components/ // library components documentation folder
\u2502  \u2502  \u251C\u2500 layout.md
\u2502  \u2502  \u2514\u2500 ...
\u2502  \u251C\u2500 constants/ // library styles documentation folder
\u2502  \u2502  \u251C\u2500 breakpoints.md
\u2502  \u2502  \u251C\u2500 colors.md
\u2502  \u2502  \u251C\u2500 others.md
\u2502  \u2502  \u251C\u2500 stylebase.md
\u2502  \u2502  \u2514\u2500 typography.md
\u2502  \u251C\u2500 links.md // useful reading links
\u2502  \u251C\u2500 README.md // homepage
\u2502  \u251C\u2500 start.md // getting started
\u2502  \u2514\u2500 structure.md // structure
\u251C\u2500 src/ // source folder
\u2502  \u251C\u2500 components/
\u2502  \u2502  \u251C\u2500 Layout
\u2502  \u2502  \u2502  \u251C\u2500 Layout.js
\u2502  \u2502  \u2502  \u2514\u2500 Layout.vue
\u2502  \u2502  \u2514\u2500 ...
\u2502  \u251C\u2500 models/ // types
\u2502  \u2502  \u251C\u2500 store/
\u2502  \u2502  \u2514\u2500 utils/
\u2502  \u251C\u2500 static/ // after build fonts will be copied here
\u2502  \u2502  \u2514\u2500 fonts/
\u2502  \u2502     \u2514\u2500 ...
\u2502  \u251C\u2500 store/ // vuex store
\u2502  \u2502  \u251C\u2500 modules/
\u2502  \u2502  \u2502  \u2514\u2500 layout.ts
\u2502  \u2502  \u2514\u2500 index.ts
\u2502  \u251C\u2500 stylus/
\u2502  \u2502  \u251C\u2500 core
\u2502  \u2502  \u2502  \u251C\u2500 _animations.styl // keyframes and Vue animationss classes
\u2502  \u2502  \u2502  \u2514\u2500 _base.styl // normalize
\u2502  \u2502  \u251C\u2500 utils
\u2502  \u2502  \u2502  \u251C\u2500 _mixins.styl
\u2502  \u2502  \u2502  \u251C\u2500 _placeholders.styl
\u2502  \u2502  \u2502  \u251C\u2500 _typography.styl // Use one, only one, Karl, a universal mixin for all cases!
\u2502  \u2502  \u2502  \u2514\u2500 _variables.styl
\u2502  \u2502  \u2514\u2500 _stylebase.styl // main file of stylus 
\u2502  \u251C\u2500 utils/ // scripts
\u2502  \u2502  \u251C\u2500 constants.ts // constants
\u2502  \u2502  \u251C\u2500 screen-helper.ts // adaptive viewport
\u2502  \u2502  \u2514\u2500 ...
\u2502  \u251C\u2500 Development.vue // app component for development mode
\u2502  \u251C\u2500 main.ts // library export and development mode switch
\u2502  \u2514\u2500 shims-vue.d.ts // vue types
\u251C\u2500 tests/
\u2502  \u2514\u2500 unit/
\u2502     \u2514\u2500 example.spec.ts
\u251C\u2500 .browserslistrc // configuration of supported browsers
\u251C\u2500 .editorconfig // configuration for editors
\u251C\u2500 .eslintrc.js // linter configuration
\u251C\u2500 .gitignore // git ignore
\u251C\u2500 .prettierrc // prettier configuration
\u251C\u2500 babel.config.js // babel configuration
\u251C\u2500 colors.jpg // image for README
\u251C\u2500 jest.config.js // jest configuration
\u251C\u2500 package.json // project configuration
\u251C\u2500 README.md
\u251C\u2500 tsconfig.json // tslint configuration
\u2514\u2500 vue.config.js // vue configuration
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div>`,2);function r(l,p){return e}var t=s(a,[["render",r]]);export{t as default};
