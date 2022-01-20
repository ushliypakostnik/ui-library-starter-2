import{c as s}from"./app.570e79e9.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h1><p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// Others from guide</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043C\u0438\u043A\u0441\u0438\u043D\u044B \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043B\u0430\u043A\u043E\u043D\u0438\u0447\u043D\u043E\u0433\u043E \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0430 <code class="nowrap">~/src/stylus/utils/_mixins.styl</code>:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// Rounding</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

$<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;soccer&quot;</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.soccer <span class="token comment">// 0</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;dancing&quot;</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.dancing <span class="token comment">// 2px</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;swimming&quot;</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.swimming <span class="token comment">// 3px</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;shooting&quot;</span></span>
    <span class="token property-declaration"><span class="token property">border-radius</span> $border-radiuses.shooting <span class="token comment">// 10px</span></span>


<span class="token comment">// Opacity</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

$<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;waltz&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.waltz <span class="token comment">// 1</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;funky&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.funky <span class="token comment">// 0.75</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;rock&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.rock <span class="token comment">// 0.66</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;psy&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.psy <span class="token comment">// 0.45</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;pop&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.pop <span class="token comment">// 0.2</span></span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">&quot;reggae&quot;</span></span>
    <span class="token property-declaration"><span class="token property">opacity</span> $opacites.reggae <span class="token comment">// 0</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>\u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.selector</span>
  $<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token string">&quot;dancing&quot;</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token string">&quot;funky&quot;</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u043C\u043E\u0433\u0443\u0442 \u043F\u0440\u0438\u0433\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0435\u0441\u043B\u0438 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B \u0437\u0430\u0445\u043E\u0442\u044F\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0446\u0432\u0435\u0442 \u0441 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043D\u043E\u0439 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C\u044E:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.dog<span class="token punctuation">,</span> $opacites.psy<span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438" tabindex="-1"><a class="header-anchor" href="#\u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438" aria-hidden="true">#</a> \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u0438</h3><p>\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 \u0441\u0442\u0438\u043B\u0435\u0432\u044B\u0435 \u043A\u043B\u0430\u0441\u0441\u044B \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432 \u0441\u0442\u0440\u043E\u0433\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C - \u0434\u043B\u044F \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0439 Vue. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0438\u0445 \u043F\u043E\u0441\u043B\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044E\u0449\u0438\u0445 <code class="nowrap">@keyframes</code> \u0432 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0444\u0430\u0439\u043B\u0435 \u0441\u0442\u0438\u043B\u0435\u0432\u043E\u0439 \u0431\u0430\u0437\u044B <code class="nowrap">~/src/stylus/core/_animation.styl</code>:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// Project animations</span>
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

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u0422\u0435\u043F\u0435\u0440\u044C \u0432 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fade<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Boolean<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,14);function e(t,o){return p}var r=n(a,[["render",e]]);export{r as default};
