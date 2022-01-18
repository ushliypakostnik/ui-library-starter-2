<template><h1 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>A component provides a grids by names.</p>
<p>To transfer content, you can use the main default slot or multiple dynamic.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- Default slot --></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rithm-for-two<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">></span></span>
  
    <span class="token comment">&lt;!-- Dinamic slots --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Grid</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rhythm-for-three<span class="token punctuation">"</span></span> <span class="token attr-name">:slots</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#slot--1</span><span class="token punctuation">></span></span>
        1
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#slot--2</span><span class="token punctuation">></span></span>
        2
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#slot--3</span><span class="token punctuation">></span></span>
        3
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Grid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<div class="test-block">
  <div class="test-name">rhythm-for-two</div>
  <Grid class="place" name="rhythm-for-two">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
  </Grid>
</div>
<div class="test-block">
  <div class="test-name">rhythm-for-three</div>
  <Grid class="place" name="rhythm-for-three">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
  </Grid>
</div>
<div class="test-block">
  <div class="test-name">rhythm-for-four</div>
  <Grid class="place" name="rhythm-for-four">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
  </Grid>
</div>
<div class="test-block">
  <div class="test-name">rhythm-for-six</div>
  <Grid class="place" name="rhythm-for-six">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
  </Grid>
</div>
<div class="test-block">
  <div class="test-name">rhythm-for-eight</div>
  <Grid class="place" name="rhythm-for-eight">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">4</div>
    <div class="block">5</div>
    <div class="block">6</div>
    <div class="block">7</div>
    <div class="block">8</div>
  </Grid>
</div>
<div class="test-block">
  <div class="test-name">rhythm-for-twelve</div>
  <Grid class="place" name="rhythm-for-twelve">
    <div class="block block--small">1</div>
    <div class="block block--small">2</div>
    <div class="block block--small">3</div>
    <div class="block block--small">4</div>
    <div class="block block--small">5</div>
    <div class="block block--small">6</div>
    <div class="block block--small">7</div>
    <div class="block block--small">8</div>
    <div class="block block--small">9</div>
    <div class="block block--small">10</div>
    <div class="block block--small">11</div>
    <div class="block block--small">12</div>
  </Grid>
</div>
<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$grids</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  gutter--desktop<span class="token punctuation">:</span> <span class="token number">40</span><span class="token unit">px</span><span class="token punctuation">,</span>
  gutter--tablet<span class="token punctuation">:</span> <span class="token number">32</span><span class="token unit">px</span><span class="token punctuation">,</span>
  gutter--mobile<span class="token punctuation">:</span> <span class="token number">24</span><span class="token unit">px</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>Name</strong></th>
<th style="text-align:left"><strong>Type</strong></th>
<th style="text-align:left"><strong>Description</strong></th>
<th style="text-align:right"><strong>Default</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>name</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Name of grid</td>
<td style="text-align:right"><strong>required</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>slots</strong></td>
<td style="text-align:left">[Number, null]</td>
<td style="text-align:left">Number of dynamic slots</td>
<td style="text-align:right"><code>null</code></td>
</tr>
</tbody>
</table>
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
<tr>
<td style="text-align:left"><strong>slot--[1..N]</strong></td>
<td style="text-align:left">Multiple dinamic named slots</td>
</tr>
</tbody>
</table>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Grid/Grid.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Grid/Grid.vue</p>
</template>
