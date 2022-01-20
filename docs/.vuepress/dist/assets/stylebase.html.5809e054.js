import{c as s}from"./app.570e79e9.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="stylebase-styl" tabindex="-1"><a class="header-anchor" href="#stylebase-styl" aria-hidden="true">#</a> _stylebase.styl</h1><p>\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440 \u0441\u0442\u0438\u043B\u0435\u0439 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043D\u0435 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 <code class="nowrap">/utils</code>, \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 <code class="nowrap">/core</code> \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 <code class="nowrap">/libs</code> (\u043D\u043E, \u0442\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0431\u0435\u0437 <code class="nowrap">scoped</code> - \u0441\u0442\u043E\u0438\u0442 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 SFC-\u043E\u0431\u0435\u0440\u0442\u043A\u0430\u0445).</p><p><code class="nowrap">@/src/stylus/_stylebase.styl</code> \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// utils</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;utils/_variables&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;utils/_placeholders&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;utils/_mixins&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;utils/_typography&quot;</span><span class="token punctuation">;</span></span>

<span class="token comment">// core</span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;core/_base&quot;</span><span class="token punctuation">;</span> <span class="token comment">// normalize</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;core/_animations&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u044E \u044D\u0442\u0443 \u043A\u0443\u0445\u043D\u044E \u043D\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445:</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylus<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;~/src/stylus/_stylebase.styl&quot;</span><span class="token punctuation">;</span></span>

...
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0437\u0432\u0430\u0442\u044C \xAB\u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438-\u043D\u0435\u0432\u0438\u0434\u0438\u043C\u043A\u0430\u043C\u0438\xBB, \u0447\u0442\u043E-\u0442\u043E \u0442\u0430\u043A\u043E\u0435 - \u043E\u043D\u0438, \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B - \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0432\u0435\u0437\u0434\u0435, \u043D\u043E, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C, \xAB\u0438\u0445 \u043D\u0435 \u0432\u0438\u0434\u043D\u043E\xBB. \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u044B \u0433\u0430\u0439\u0434\u043B\u0430\u0439\u043D\u0430 \u0438 \u0432\u0441\u044E \u043F\u0440\u043E\u0447\u0443\u044E \u043C\u043E\u0449\u044C \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u0432\u0441\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u044B\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C - \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435 \u0438 \u0432\u0441\u0435\u043C \u0435\u0435 \xAB\u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C\xBB.</p><h3 id="mixins-and-placeholders" tabindex="-1"><a class="header-anchor" href="#mixins-and-placeholders" aria-hidden="true">#</a> Mixins and placeholders</h3><p>UI Library Starter \u0434\u0430\u0435\u0442 \u043D\u0430\u0434\u0435\u0436\u0434\u0443 \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u0432 \u0432\u0430\u0448\u0435\u0439 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435 \u043A\u043E\u0434 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u043D\u044B\u0439. \u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u0436\u0435 \u043A\u0440\u0443\u043F\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0431\u0430\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0445\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435 - \u0438 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439, \u0438, \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F - \u0433\u0438\u0431\u043A\u043E\u0439.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u041D\u0435 \u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u043E\u0434 \u043A\u0443\u0441\u043A\u0430\u043C\u0438 \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C - \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u0432 \u043C\u0438\u043A\u0441\u0438\u043D\u0430\u0445 \u0438 \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440\u0430\u0445!</p></div><p><code class="nowrap">@/src/stylus/utils/_placeholders.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// Project placeholders</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Utilities</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token selector">$flex--center</span>
  <span class="token property-declaration"><span class="token property">display</span> flex</span>
  <span class="token property-declaration"><span class="token property">align-items</span> center</span>
  <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u0418\u043B\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0441\u0438 \u0431\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B - \u0437\u0430\u0431\u0435\u0433\u0430\u044F \u0432\u043F\u0435\u0440\u0435\u0434 (\u0441\u043C. \u0440\u0430\u0437\u0434\u0435\u043B Breakpoints) - \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043F\u0430\u0441\u0441\u0430\u0436 \u0441\u0442\u0430\u043B \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u0435\u0434\u0438\u0430-\u043C\u0438\u043A\u0441\u0438\u043D\u043E\u0432:</p><p><code class="nowrap">@/src/stylus/utils/_mixins.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector"><span class="token comment">// Utilities</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">// Mixins without arguments duplicate placeholders,</span></span>
<span class="token comment">// so it can be passed to media mixins</span>

$<span class="token func"><span class="token function">flex--center</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">display</span> flex</span>
  <span class="token property-declaration"><span class="token property">align-items</span> center</span>
  <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u0422\u0435\u043F\u0435\u0440\u044C:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.selector</span>
  +$<span class="token func"><span class="token function">tablet</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
    $<span class="token func"><span class="token function">flex--center</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17);function p(t,l){return e}var r=n(a,[["render",p]]);export{r as default};
