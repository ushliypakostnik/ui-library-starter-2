<template><h1 id="wrapper" tabindex="-1"><a class="header-anchor" href="#wrapper" aria-hidden="true">#</a> Wrapper</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>A component provides a standard content wrapper for use in most cases already in the assembly (and not inside the component). So, sometimes, the implementation of a design, for example - sliders with controls for gadgets, requires - &quot;break the wrapper&quot;.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">></span></span>
  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SomeSlider</span> <span class="token punctuation">/></span></span>
  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span><span class="token punctuation">></span></span>
      ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Wrapper</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'SomeView'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<div class="wrapper-test place">
  <Wrapper><div class="block">Content</div></Wrapper>
  <div class="block">Slider</div>
  <Wrapper><div class="block">Content</div></Wrapper>
</div>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$wrapper</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  gutter--desktop<span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">,</span>
  gutter--tablet<span class="token punctuation">:</span> <span class="token number">32</span><span class="token unit">px</span><span class="token punctuation">,</span>
  gutter--mobile<span class="token punctuation">:</span> <span class="token number">24</span><span class="token unit">px</span><span class="token punctuation">,</span>

  width--max<span class="token punctuation">:</span> <span class="token number">1280</span><span class="token unit">px</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>Name</strong></th>
<th style="text-align:left"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">default</td>
<td style="text-align:left">Content</td>
</tr>
</tbody>
</table>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Wrapper/Wrapper.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Wrapper/Wrapper.vue</p>
</template>
