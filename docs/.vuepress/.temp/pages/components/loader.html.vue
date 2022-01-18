<template><h1 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> Loader</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>A component provides a spinner element.</p>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Loader</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<div class="test-block">
  <Loader :size="16" />
</div>
<div class="test-block">
  <Loader :size="20" />
</div>
<div class="test-block">
  <Loader :size="24" />
</div>
<div class="test-block">
  <Loader :size="32" />
</div>
<div class="test-block">
  <Loader :size="48" />
</div>
<div class="test-block">
  <Loader />
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
<td style="text-align:left"><strong>size</strong></td>
<td style="text-align:left">Number: <code>16</code>, <code>20</code>, <code>24</code>, <code>32</code>, <code>48</code>, <code>72</code></td>
<td style="text-align:left">Spinner size</td>
<td style="text-align:right"><code>72</code></td>
</tr>
</tbody>
</table>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Loader/Loader.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Loader/Loader.vue</p>
</template>
