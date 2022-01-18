<template><h1 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>The component provides a icon. Now the all icons are drawn for the size 24 by 24 px.</p>
<p>In order to reliably control the icons of the library, add all the icons through this component and reflect in the documentation.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<div class="icons-test">
  <div>
    <div class="icon-test">
      <Icon name="close" />
      <span class="icon-test__text">close</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="bar" />
      <span class="icon-test__text">bar</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="search" />
      <span class="icon-test__text">search</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="left" />
      <span class="icon-test__text">left</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="right" />
      <span class="icon-test__text">right</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="down" />
      <span class="icon-test__text">down</span>
    </div>
  </div>
  <div>
    <div class="icon-test">
      <Icon name="up" />
      <span class="icon-test__text">up</span>
    </div>
  </div>
</div>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td style="text-align:left">Icon name</td>
<td style="text-align:right"><strong>required</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>fill</strong></td>
<td style="text-align:left">String: HEX-color, <code>'currentColor'</code></td>
<td style="text-align:left">Icon color</td>
<td style="text-align:right"><code>'currentColor'</code></td>
</tr>
</tbody>
</table>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Icon/Icon.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Icon/Icon.vue</p>
<p><code class="nowrap">@/src/components/Icon/Close.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Icon/Close.vue</p>
</template>
