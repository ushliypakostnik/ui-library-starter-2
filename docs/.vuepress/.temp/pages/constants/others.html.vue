<template><h1 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h1>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Others from guide</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token variable-declaration"><span class="token variable">$border-radiuses</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  soccer<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  dancing<span class="token punctuation">:</span> <span class="token number">2</span><span class="token unit">px</span><span class="token punctuation">,</span>
  swimming<span class="token punctuation">:</span> <span class="token number">3</span><span class="token unit">px</span><span class="token punctuation">,</span>
  shooting<span class="token punctuation">:</span> <span class="token number">10</span><span class="token unit">px</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>

<span class="token variable-declaration"><span class="token variable">$opacites</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  waltz<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  funky<span class="token punctuation">:</span> <span class="token number">0.75</span><span class="token punctuation">,</span>
  rock<span class="token punctuation">:</span> <span class="token number">0.66</span><span class="token punctuation">,</span>
  psy<span class="token punctuation">:</span> <span class="token number">0.45</span><span class="token punctuation">,</span>
  pop<span class="token punctuation">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
  reggae<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>

<span class="token variable-declaration"><span class="token variable">$effects</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  duration<span class="token punctuation">:</span> <span class="token number">0.1</span><span class="token unit">s</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Можно получить из этого миксины для более лаконичного синтаксиса <code class="nowrap">~/src/stylus/utils/_mixins.styl</code>:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Rounding</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

$<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"soccer"</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.soccer <span class="token comment">// 0</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"dancing"</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.dancing <span class="token comment">// 2px</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"swimming"</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.swimming <span class="token comment">// 3px</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"shooting"</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.shooting <span class="token comment">// 10px</span></span>


<span class="token comment">// Opacity</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

$<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"waltz"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.waltz <span class="token comment">// 1</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"funky"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.funky <span class="token comment">// 0.75</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"rock"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.rock <span class="token comment">// 0.66</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"psy"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.psy <span class="token comment">// 0.45</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"pop"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.pop <span class="token comment">// 0.2</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"reggae"</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.reggae <span class="token comment">// 0</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Теперь можно:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  $<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token string">"dancing"</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token string">"funky"</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Переменные все равно могут пригодиться если дизайнеры захотят сделать новый цвет с разрешенной прозрачностью:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.dog<span class="token punctuation">,</span> $opacites.psy<span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="анимации" tabindex="-1"><a class="header-anchor" href="#анимации" aria-hidden="true">#</a> Анимации</h3>
<p>Единственные глобально компилируемые стилевые классы которые в строгой традиции разрешено использовать - для анимаций Vue. Вы можете добавлять их после соответсвующих <code class="nowrap">@keyframes</code> в специальном файле стилевой базы <code class="nowrap">~/src/stylus/core/_animation.styl</code>:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Project animations</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Keyframes</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token atrule-declaration"><span class="token atrule">@keyframes</span> fade</span>
  <span class="token selector">0%</span>
    <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">0</span></span>

  <span class="token selector">100%</span>
    <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>


<span class="token comment">// Vue classes for animation</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token selector">.fade</span>
  <span class="token selector">&amp;-enter-active</span>
    <span class="token property-declaration"><span class="token property">animation</span> fade <span class="token punctuation">(</span>$effects.duration <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> forwards</span>

  <span class="token selector">&amp;-leave-active</span>
    <span class="token property-declaration"><span class="token property">animation</span> fade <span class="token punctuation">(</span>$effects.duration <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> reverse</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Теперь в разметке:</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Boolean<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
