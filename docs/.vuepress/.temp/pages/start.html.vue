<template><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>Скачайте код <span class="nowrap"><a href="https://github.com/ushliypakostnik/ui-library-starter-2" target="_blank" rel="noopener noreferrer">ui-library-starter-2<ExternalLinkIcon/></a></span> и оформите его в отдельный репозиторий. При выборе имени для нового репозитория необходимо сразу убедиться в том, что оно не занято на <span class="nowrap"><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com<ExternalLinkIcon/></a></span>. Пусть это будет <code class="nowrap">ui-library-starter-2-test</code>.</p>
<p>Или, в случае, если вы не планируете менять стиль проекта под свои собственные гайды, но, собираетесь поиграться или даже внести вклад в его развитие, например, предложив еще какие-то важные компоненты - сделайте форк, конечно же. Дальнейшие инструкции относятся к первому случаю - пилим свежую либу с кастомным стилем под конкретные задачи - в этом случае многие могут захотеть удалить эту документацию и почти все компоненты, чтобы не выполнять лишнюю кастомизацию.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="customization" tabindex="-1"><a class="header-anchor" href="#customization" aria-hidden="true">#</a> Customization</h2>
<h3 id="readme-md" tabindex="-1"><a class="header-anchor" href="#readme-md" aria-hidden="true">#</a> README.md</h3>
<p>Поправьте первую строчку в <code class="nowrap">@/README.md</code>:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Ui-library-starter 2 test project
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h3>
<p>Далее в <code class="nowrap">@/package.json</code> вам необходимо крайне аккуратно переписать актуальной информацией следующие поля, ничего не пропустив:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ui-library-starter-2-test"</span><span class="token punctuation">,</span>
  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"UI Library Starter 2 Demonstration"</span><span class="token punctuation">,</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1.0"</span><span class="token punctuation">,</span>
  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"dist/ui-library-starter-2-test.umd.min.js"</span><span class="token punctuation">,</span>
  <span class="token property">"unpkg"</span><span class="token operator">:</span> <span class="token string">"dist/ui-library-starter-2-test.umd.min.js"</span><span class="token punctuation">,</span>
  <span class="token property">"jsdelivr"</span><span class="token operator">:</span> <span class="token string">"dist/ui-library-starter-2-test.umd.min.js"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build --target lib --name ui-library-starter-2 src/main.ts"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"Levon Gambaryan"</span><span class="token punctuation">,</span>
  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span>
  <span class="token property">"homepage"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token property">"repository"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"git"</span><span class="token punctuation">,</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://github.com/ushliypakostnik/ui-library-starter-2-test"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"bugs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://github.com/ushliypakostnik/ui-library-starter-2-test/issues"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Обратите внимание на имя проекта в конце команды деплоя <code class="nowrap">build</code>!</p>
<h3 id="documentation-config" tabindex="-1"><a class="header-anchor" href="#documentation-config" aria-hidden="true">#</a> Documentation config</h3>
<p>Перейдите к документации на VuePress и сконфигурируйте ее под себя <code class="nowrap">@/docs/.vuepress/config.js</code>:</p>
<h3 id="connecting-fonts" tabindex="-1"><a class="header-anchor" href="#connecting-fonts" aria-hidden="true">#</a> Connecting fonts</h3>
<p>Исходный проект библиотеки использует шрифт Ubuntu и вам необходимо подключить шрифт который диктует ваше руководство по стилю. Предположим, это Open Sans и у вас есть его веб-фонт.</p>
<p>Перепишите имя шрифта и переменные начертаний если требуется в файле <code class="nowrap">~/src/stylus/utils/_typography.styl</code>:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$font-family</span> <span class="token operator">=</span> <span class="token string">"Open Sans"</span></span>

<span class="token variable-declaration"><span class="token variable">$font-weight</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  regular<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  bold<span class="token punctuation">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Поместите папку с правильным шрифтом рядом с папкой <code class="nowrap">/Ubuntu</code> в <code class="nowrap">@/src/static/fonts/</code>.</p>
<p>Пропишите правильные пути импорта и имя шрифта в таге <code>body</code> в секции стилей компонента для разработки <code class="nowrap">@/src/Development.vue</code>:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
// Import fonts
//////////////////////////////////////////////////////

@font-face
  font-family $font-family
  src <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Regular.eot"</span><span class="token punctuation">)</span></span>
  src <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">"Ubuntu Regular"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">"Ubuntu-Regular"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Regular.eot?#iefix"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"embedded-opentype"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Regular.woff2"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Regular.woff"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Regular.ttf"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span>
  font-weight $font-weight.regular
  font-style normal

@font-face
  font-family $font-family
  src <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Bold.eot"</span><span class="token punctuation">)</span></span>
  src <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">"Ubuntu Bold"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">local</span><span class="token punctuation">(</span><span class="token string">"Ubuntu-Bold"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Bold.eot?#iefix"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"embedded-opentype"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Bold.woff2"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff2"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Bold.woff"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"woff"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"../../static/fonts/Ubuntu/Ubuntu-Bold.ttf"</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">"truetype"</span><span class="token punctuation">)</span>
  font-weight $font-weight.bold
  font-style <span class="token property">normal</span>
  
<span class="token punctuation">:</span>root
  scroll-behavior smooth

body
  font-family <span class="token string">"Open Sans"</span><span class="token punctuation">,</span> sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  <span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeSpeed
  overflow-x hidden
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>Удалите директорию со старым шрифтом <code class="nowrap">@/src/static/fonts/Ubuntu</code>.</p>
<h3 id="сleaning-project" tabindex="-1"><a class="header-anchor" href="#сleaning-project" aria-hidden="true">#</a> Сleaning project</h3>
<p>Если вы хотите получить полностью чистую документацию - произведите следующую очистку папок и файлов.</p>
<p>Удалите все папки и файлы в <code class="nowrap">@/docs/</code> кроме директории <code class="nowrap">@/docs/.vuepress</code> и файла <code class="nowrap">@/docs/README.md</code>, который нужно оставить, но очистить:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># UI Library

...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Вернитесь к конфигурации документации и отразите изменения в <code class="nowrap">@/docs/.vuepress/config.js</code>.</p>
<h3 id="style-setting" tabindex="-1"><a class="header-anchor" href="#style-setting" aria-hidden="true">#</a> Style setting</h3>
<p>Запустите разработку документации командой:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run docs:dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Ознакомьтесь с разделом <a href="https://ui-library-starter-2.netlify.app/constants/stylebase.html" target="_blank" rel="noopener noreferrer">Constants<ExternalLinkIcon/></a> документации к исходному проекту.</p>
<p>Вам необходимо настроить препроцессор вашей библиотеки в точном соответсвии с вашим руководством по фирменному стилю.</p>
<h2 id="adding-a-component" tabindex="-1"><a class="header-anchor" href="#adding-a-component" aria-hidden="true">#</a> Adding a component</h2>
<p>После того как стили библиотеки настроены вы можете добавлять свои специфические компоненты.</p>
<p>Выберете имя для компонента в PascalCase стиле написания, предположим это <code class="nowrap">ComponentName</code>.</p>
<p>Добавьте директорию <code class="nowrap">@/src/components/ComponentName</code>.</p>
<p>Добавьте в нее индексный файл c импортом-экспортом:</p>
<p><code class="nowrap">@/src/components/ComponentName/index.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> ComponentName <span class="token keyword">from</span> <span class="token string">'./ComponentName.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ComponentName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>И сам компонент:</p>
<p><code class="nowrap">@/src/components/ComponentName/ComponentName.vue</code></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>component-name<span class="token punctuation">"</span></span>
    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{
      <span class="token punctuation">'</span>.component-name__element--modifier1<span class="token punctuation">'</span>: prop1,
      <span class="token punctuation">'</span>.component-name__element--modifier2<span class="token punctuation">'</span>: prop2,
    }<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    This is test component!!!
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ComponentName'</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop1</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~/src/stylus/_stylebase.styl"</span><span class="token punctuation">;</span></span>

.component-name
  background $colors.primary // test styles
  // add adaptive
  +$<span class="token function">mobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    display block

  &amp;__element
    $<span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"natasha"</span><span class="token punctuation">)</span> // add typography

    &amp;--modifier1
      color $colors.primary // add good color

    &amp;--modifier2
      color $colors.secondary
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>Добавьте экспорт в индексный файл библиотеки <code class="nowrap">@/src/components/index.ts</code>:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> ComponentName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./ComponentName'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Добавьте документацию компонента в файл <code class="nowrap">@/docs/components/component-name.md</code>:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> ComponentName</span>

<span class="token title important"><span class="token punctuation">##</span> Description</span>

This is new custom component.

<span class="token title important"><span class="token punctuation">##</span> Connection</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ComponentName</span> <span class="token attr-name">prop1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Boolean(required)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token title important"><span class="token punctuation">##</span> API</span>

<span class="token title important"><span class="token punctuation">###</span> Props</span>

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">Name</span><span class="token punctuation">**</span></span>  </span><span class="token punctuation">|</span><span class="token table-header important"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">Type</span><span class="token punctuation">**</span></span> </span><span class="token punctuation">|</span><span class="token table-header important"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">Description</span><span class="token punctuation">**</span></span> </span><span class="token punctuation">|</span><span class="token table-header important"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">Default</span><span class="token punctuation">**</span></span> </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:--------</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------</span> <span class="token punctuation">|</span> <span class="token punctuation">:--------------</span> <span class="token punctuation">|</span> <span class="token punctuation">----------:</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">prop1</span><span class="token punctuation">**</span></span> </span><span class="token punctuation">|</span><span class="token table-data"> Boolean  </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token list punctuation">-</span>               </span><span class="token punctuation">|</span><span class="token table-data">  (required) </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> <span class="token bold"><span class="token punctuation">**</span><span class="token content">prop2</span><span class="token punctuation">**</span></span> </span><span class="token punctuation">|</span><span class="token table-data"> Boolean  </span><span class="token punctuation">|</span><span class="token table-data"> <span class="token list punctuation">-</span>               </span><span class="token punctuation">|</span><span class="token table-data">     <span class="token code-snippet code keyword">`false`</span> </span><span class="token punctuation">|</span>
</span></span>
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>И далее - рендер-тест и исходный код по аналогии с другими файлами.</p>
<p>Добавьте компонент в конфигурацию VuePress <code class="nowrap">@/docs/.vuepress/config.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Components</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ComponentName</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'/components/component-name'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="using-third-party-modules" tabindex="-1"><a class="header-anchor" href="#using-third-party-modules" aria-hidden="true">#</a> Using third party modules</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Используйте только относительные пути для импорта чего-либо в typescript ваших компонентов или модулей хранилища Vuex. Не используйте «абсолютные» алиасы (в контексте дочернего проекта, данный импорт будет искать зависимость в директории @/... проекта, а не библиотеки):</p>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">'../Icon/Icon'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ComponentName'</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Icon<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span><span class="token punctuation">;</span>

<span class="token comment">// Types</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> IStore<span class="token punctuation">,</span> ILayout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../models/store'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState<span class="token operator">:</span> ILayout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ModuleName<span class="token operator">:</span> Module<span class="token operator">&lt;</span>ILayout<span class="token punctuation">,</span> IStore<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  namespaced<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  state<span class="token operator">:</span> initialState<span class="token punctuation">,</span>

  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ModuleName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>В реальных проектах вам потребуется очень часто закрывать «самые дорогие требования» с помощью аккуратно подобранных подходящих готовых решений. В таких случаях логично будет создавать обертку над чужим модулем, предоставляющую всю необходимую кастомизацию.</p>
<p>Так как мы используем глобальные стили собственной кастомизации модуля - невозможно будет защитить стили перекастомизации в SFC-обертке с помощью <code class="nowrap">scoped</code>:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~/src/stylus/_stylebase.styl"</span><span class="token punctuation">;</span></span>

// Customization
// ...
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="use-the-sandbox-not-documentation" tabindex="-1"><a class="header-anchor" href="#use-the-sandbox-not-documentation" aria-hidden="true">#</a> Use the sandbox (not documentation)</h2>
<p>Используйте специальный режим для разработки и тестирования модуля-библиотеки. Для того чтобы переключиться в него - выставите флаг <code>isDevelopmentModuleMode</code> в значение <code>true</code> главном файле проекта <code class="nowrap">@/src/main.ts</code>:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// ATTENTION! Set to true if you want</span>
<span class="token comment">// to develop a module (not documentation)</span>
<span class="token comment">// and false before publishing for use in projects</span>
<span class="token keyword">const</span> isDevelopmentModuleMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isDevelopmentModuleMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Start development module!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">createApp</span><span class="token punctuation">(</span>Development<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="library-publishing" tabindex="-1"><a class="header-anchor" href="#library-publishing" aria-hidden="true">#</a> Library publishing</h2>
<p>Зарегистрируйтесь на <span class="nowrap"><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com<ExternalLinkIcon/></a></span> и подтвердите регистрацию (дождитесь письма на почту).</p>
<p>Перед публикацией не забудьте отключить режим разработки модуля.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run build
$ npm version patch
$ npm publish
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="connecting-to-projects" tabindex="-1"><a class="header-anchor" href="#connecting-to-projects" aria-hidden="true">#</a> Connecting to projects</h2>
<p>Вы можете либо использовать стартовый шаблон для новых проектов <span class="nowrap"><a href="https://github.com/ushliypakostnik/ui-library-2-test" target="_blank" rel="noopener noreferrer">ui-library-start<ExternalLinkIcon/></a></span>, тогда вам придется заменить библиотеку:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm uninstall ui-library-starter-2 --save-dev
$ npm install ui-library-starter-2-test --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Либо установить библиотеку как любой другой модуль в любой другой проект:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm install ui-library-starter-2-test --save-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Организация стилей дочерних проектов может или иметь подобную библиотеке структуру или любую другую (например, если вы внедряете бибилиотеку в старый проект). Единственное требование: первый импорт в основном файле - основного файла библиотеки. Второй - подключение шрифтов и стилизация <code class="nowrap">:root</code> и <code class="nowrap">body</code>.</p>
<p><code class="nowrap">@/src/stylus/_stylebase.styl</code> проекта использующего библиотеку:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Import UI Library stylebase</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">'~ui-library-starter-2-test/src/stylus/_stylebase.styl'</span><span class="token punctuation">;</span></span>

<span class="token comment">// core</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"core/_base"</span><span class="token punctuation">;</span> <span class="token comment">// normalize</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code class="nowrap">@/src/stylus/core/_base.styl</code> проекта использующего библиотеку:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Import UI Library fonts</span>

<span class="token atrule-declaration"><span class="token atrule">@font-face</span> <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url('~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Regular.eot')</span><span class="token punctuation">;</span></span>
  src<span class="token punctuation">:</span> <span class="token func"><span class="token function">local</span><span class="token punctuation">(</span><span class="token string">'Ubuntu Regular'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> local<span class="token punctuation">(</span><span class="token string">'Ubuntu-Regular'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Regular.eot?#iefix'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Regular.woff2'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Regular.woff'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Regular.ttf'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">font-weight</span><span class="token punctuation">:</span> $font-weight.regular<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token atrule-declaration"><span class="token atrule">@font-face</span> <span class="token punctuation">{</span></span>
  <span class="token property-declaration"><span class="token property">font-family</span><span class="token punctuation">:</span> $font-family<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url('~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Bold.eot')</span><span class="token punctuation">;</span></span>
  src<span class="token punctuation">:</span> <span class="token func"><span class="token function">local</span><span class="token punctuation">(</span><span class="token string">'Ubuntu Bold'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> local<span class="token punctuation">(</span><span class="token string">'Ubuntu-Bold'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Bold.eot?#iefix'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Bold.woff2'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Bold.woff'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
    <span class="token func"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'~ui-library-starter-2-test/src/static/fonts/Ubuntu/Ubuntu-Bold.ttf'</span><span class="token punctuation">)</span> format<span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">font-weight</span><span class="token punctuation">:</span> $font-weight.bold<span class="token punctuation">;</span></span>
  <span class="token property-declaration"><span class="token property">font-style</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// Base normalize</span>

<span class="token selector">:root</span>
  <span class="token property-declaration"><span class="token property">scroll-behavior</span> smooth</span>

<span class="token selector">body</span>
  <span class="token property-declaration"><span class="token property">font-family</span> $font-family<span class="token punctuation">,</span> sans-serif</span>
  <span class="token property-declaration"><span class="token property">-moz-osx-font-smoothing</span> grayscale</span>
  <span class="token property-declaration"><span class="token property">-webkit-font-smoothing</span> antialiased</span>
  <span class="token property-declaration"><span class="token property">text-rendering</span><span class="token punctuation">:</span> optimizeSpeed</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.text</span>
  <span class="token property-declaration"><span class="token property">overflow-x</span> hidden</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>Практически единственный повод что-то поменять в этом файле - крайне маловероятная ситуация - замена или добавление шрифта в гайдлайн. Предполагается что отредактировать пути шрифтов придется только один раз - при подключении библиотеки под определенный стиль.</p>
<p>Подключите все это к главному шаблону <code class="nowrap">@/src/App.vue</code>:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span>Test content of test poject!!!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~/src/stylus/_stylebase.styl"</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Исправьте имя библиотеки в импортах в точку входа <code class="nowrap">@/src/main.js</code> если вы брали готовый репо или подключите:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> ComponentLibrary <span class="token keyword">from</span> <span class="token string">'ui-library-starter-2-test'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'ui-library-starter-2-test/dist/ui-library-starter-2-test.css'</span><span class="token punctuation">;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ComponentLibrary<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Исправьте имя или добавьте команду <code class="nowrap">update</code> в <code class="nowrap">@/package.json</code>:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"ui-library-start-test"</span><span class="token punctuation">,</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"update"</span><span class="token operator">:</span> <span class="token string">"npm install ui-library-starter-2-test@latest"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="updating-in-projects" tabindex="-1"><a class="header-anchor" href="#updating-in-projects" aria-hidden="true">#</a> Updating in projects</h2>
<p>Обновляйте библиотеку до последней версии в проектах:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ npm run update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></template>
