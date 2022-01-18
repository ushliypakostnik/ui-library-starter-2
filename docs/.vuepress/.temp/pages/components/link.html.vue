<template><h1 id="link" tabindex="-1"><a class="header-anchor" href="#link" aria-hidden="true">#</a> Link</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>The component provides a hypertext link.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Link</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>String(required)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hypertext link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<Link path="https://good-layout-book.netlify.app/">This is link!!!</Link>
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
<td style="text-align:left"><strong>path</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Link url</td>
<td style="text-align:right"><strong>required</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>target</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Target attr</td>
<td style="text-align:right"><code>'_blank'</code></td>
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
<td style="text-align:left">Link text</td>
</tr>
</tbody>
</table>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Link/Link.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Link/Link.vue</p>
</template>
