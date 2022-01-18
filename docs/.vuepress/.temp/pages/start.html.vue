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
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"rimraf ./src/static &amp;&amp; cp -r ./docs/.vuepress/public ./src/static &amp;&amp; vue-cli-service build --target lib --name ui-library-starter-2-test src/main.js"</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>Обратите внимание на имя проекта в конце длинной команды деплоя <code class="nowrap">build</code>!</p>
<h3 id="documentation-config" tabindex="-1"><a class="header-anchor" href="#documentation-config" aria-hidden="true">#</a> Documentation config</h3>
<p>Перейдите к документации на VuePress и сконфигурируйте ее под себя <code class="nowrap">@/docs/.vuepress/config.js</code>:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">'en-US'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'UI Library Starter 2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Vue Component UI Library Starter 2'</span><span class="token punctuation">,</span>

  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">'@vuepress/theme-default'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">'GitHub repo'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'https://github.com/ushliypakostnik/ui-library-starter-2-test.git'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">editLink</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">nav</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'NPM'</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">'https://www.npmjs.com/package/ui-library-starter-2-test'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Intro</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token comment">// collapsable: false,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token string">'/'</span><span class="token punctuation">,</span>
              <span class="token string">'start'</span><span class="token punctuation">,</span>
              <span class="token string">'structure'</span><span class="token punctuation">,</span>
              <span class="token string">'links'</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
