<template><h1 id="stylebase-styl" tabindex="-1"><a class="header-anchor" href="#stylebase-styl" aria-hidden="true">#</a> _stylebase.styl</h1>
<p>Глобальный медиатор стилей собирает не компилируемые <code class="nowrap">/utils</code>, компилируемые <code class="nowrap">/core</code> сущности и необходимые глобально кастомизации используемых сторонних модулей <code class="nowrap">/libs</code> (но, те которые позволяют это сделать без <code class="nowrap">scoped</code> - стоит разместить в SFC-обертках).</p>
<p><code class="nowrap">@/src/stylus/_stylebase.styl</code> библиотеки:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// utils</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"utils/_variables"</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"utils/_placeholders"</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"utils/_mixins"</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"utils/_typography"</span><span class="token punctuation">;</span></span>

<span class="token comment">// core</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"core/_base"</span><span class="token punctuation">;</span> <span class="token comment">// normalize</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"core/_animations"</span><span class="token punctuation">;</span></span>

<span class="token comment">// libs</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Теперь можно использовать всю эту кухню на компонентах:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~/src/stylus/_stylebase.styl"</span><span class="token punctuation">;</span></span>

...
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Это можно назвать «глобальными стилями-невидимками», что-то такое - они, с одной стороны - участвуют в правильном оформлении везде, но, при этом, «их не видно». Мы предоставляем глобальные константы гайдлайна и всю прочую мощь препроцессора всем компонентным системам - библиотеке и всем ее «читателям».</p>
<h3 id="mixins-and-placeholders" tabindex="-1"><a class="header-anchor" href="#mixins-and-placeholders" aria-hidden="true">#</a> Mixins and placeholders</h3>
<p>UI Library Starter дает надежду на то, что в вашей разметке код будет полностью оптимальный и консистентный. Это способно сделать даже крупную систему из нескольких проектов базирующихся на одном визуальном языке - и полностью управляемой, и, в тоже время - гибкой.</p>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Не копируйте код кусками по компонентам - оптимизируйте очевидно одинаковые наборы в миксинах и плейсхолдерах!</p>
</div>
<p><code class="nowrap">@/src/stylus/utils/_placeholders.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Project placeholders</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Utilities</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token selector">$flex--center</span>
  <span class="token property-declaration"><span class="token property">display</span> flex</span>
  <span class="token property-declaration"><span class="token property">align-items</span> center</span>
  <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Или вы можете делать примеси без параметров для того чтобы - забегая вперед (см. раздел Breakpoints) - такой же пассаж стал доступен внутри медиа-миксинов:</p>
<p><code class="nowrap">@/src/stylus/utils/_mixins.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector"><span class="token comment">// Utilities</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">// Mixins without arguments duplicate placeholders,</span></span>
<span class="token comment">// so it can be passed to media mixins</span>

$<span class="token func"><span class="token function">flex--center</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">display</span> flex</span>
  <span class="token property-declaration"><span class="token property">align-items</span> center</span>
  <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Теперь:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  +$<span class="token func"><span class="token function">tablet</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
    $<span class="token func"><span class="token function">flex--center</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
