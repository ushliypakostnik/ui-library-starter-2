<template><h1 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>The component provides a simple input control.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">:value.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input placeholder text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
      <span class="token attr-name">:value.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input placeholder text<span class="token punctuation">"</span></span>
      <span class="token attr-name">error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text error text<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>
      <span class="token attr-name">disabled</span>
      <span class="token attr-name">:value.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input3<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input placeholder text<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input3</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<Input :value="''" placeholder="Input placeholder text" />
<Input :value="''" placeholder="Input placeholder text" error="Error text error text error text error text error text error text error text error text error text error text error text error text error text" />
<Input :value="''" placeholder="Input placeholder text" disabled />
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$inputs</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  height--input<span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">,</span>

  padding<span class="token punctuation">:</span> <span class="token number">16</span><span class="token unit">px</span><span class="token punctuation">,</span>

  background--default<span class="token punctuation">:</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.primary<span class="token punctuation">,</span> $opacites.pop<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
  background--error<span class="token punctuation">:</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.bird<span class="token punctuation">,</span> $opacites.pop<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="token punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code class="nowrap">~/src/stylus/utils/_placeholders.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Forms</span>

$<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$background<span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">background</span> $background</span>

  <span class="token selector">&amp;:hover</span>
    <span class="token property-declaration"><span class="token property">background</span> <span class="token func"><span class="token function">lighten</span><span class="token punctuation">(</span>$background<span class="token punctuation">,</span> $effects.amount<span class="token punctuation">)</span></span></span>

  <span class="token selector">&amp;:active<span class="token punctuation">,</span>
  &amp;:focus</span>
    <span class="token property-declaration"><span class="token property">background</span> <span class="token func"><span class="token function">darken</span><span class="token punctuation">(</span>$background<span class="token punctuation">,</span> $effects.amount<span class="token punctuation">)</span></span></span>

<span class="token selector">$input</span>
  <span class="token comment">// ...</span>

  <span class="token selector">&amp;__wrapper</span>
    <span class="token comment">// ...</span>

    <span class="token selector">&amp;--disabled</span>
      <span class="token comment">// ...</span>
  
    <span class="token selector">&amp;--error</span>
      <span class="token comment">// ...</span>

  <span class="token selector">&amp;__error</span>
    <span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p><a href="/components/controls">controls.js</a></p>
<p><a href="/components/inputs">inputs.js</a></p>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Input/Input.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Input/Input.vue</p>
</template>
