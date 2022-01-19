import{c as n}from"./app.a818744d.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="stylebase-styl" tabindex="-1"><a class="header-anchor" href="#stylebase-styl" aria-hidden="true">#</a> _stylebase.styl</h1><p>\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u0434\u0438\u0430\u0442\u043E\u0440 \u0441\u0442\u0438\u043B\u0435\u0439 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043D\u0435 \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 <code class="nowrap">/utils</code>, \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u0435 <code class="nowrap">/core</code> \u0441\u0443\u0449\u043D\u043E\u0441\u0442\u0438 \u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E \u043A\u0430\u0441\u0442\u043E\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 <code class="nowrap">/libs</code> (\u043D\u043E, \u0442\u0435 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0431\u0435\u0437 <code class="nowrap">scoped</code> - \u0441\u0442\u043E\u0438\u0442 \u0440\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 SFC-\u043E\u0431\u0435\u0440\u0442\u043A\u0430\u0445).</p><p><code class="nowrap">@/src/stylus/_stylebase.styl</code> \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// utils</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043D\u0430\u0437\u0432\u0430\u0442\u044C \xAB\u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0442\u0438\u043B\u044F\u043C\u0438-\u043D\u0435\u0432\u0438\u0434\u0438\u043C\u043A\u0430\u043C\u0438\xBB, \u0447\u0442\u043E-\u0442\u043E \u0442\u0430\u043A\u043E\u0435 - \u043E\u043D\u0438, \u0441 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B - \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0438 \u0432\u0435\u0437\u0434\u0435, \u043D\u043E, \u043F\u0440\u0438 \u044D\u0442\u043E\u043C, \xAB\u0438\u0445 \u043D\u0435 \u0432\u0438\u0434\u043D\u043E\xBB. \u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u044B \u0433\u0430\u0439\u0434\u043B\u0430\u0439\u043D\u0430 \u0438 \u0432\u0441\u044E \u043F\u0440\u043E\u0447\u0443\u044E \u043C\u043E\u0449\u044C \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u0432\u0441\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u044B\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C - \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435 \u0438 \u0432\u0441\u0435\u043C \u0435\u0435 \xAB\u0447\u0438\u0442\u0430\u0442\u0435\u043B\u044F\u043C\xBB.</p><h3 id="mixins-and-placeholders" tabindex="-1"><a class="header-anchor" href="#mixins-and-placeholders" aria-hidden="true">#</a> Mixins and placeholders</h3><p>UI Library Starter \u0434\u0430\u0435\u0442 \u043D\u0430\u0434\u0435\u0436\u0434\u0443 \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u0432 \u0432\u0430\u0448\u0435\u0439 \u0440\u0430\u0437\u043C\u0435\u0442\u043A\u0435 \u043A\u043E\u0434 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u043A\u043E\u043D\u0441\u0438\u0441\u0442\u0435\u043D\u0442\u043D\u044B\u0439. \u042D\u0442\u043E \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u0436\u0435 \u043A\u0440\u0443\u043F\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0438\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0431\u0430\u0437\u0438\u0440\u0443\u044E\u0449\u0438\u0445\u0441\u044F \u043D\u0430 \u043E\u0434\u043D\u043E\u043C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435 - \u0438 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439, \u0438, \u0432 \u0442\u043E\u0436\u0435 \u0432\u0440\u0435\u043C\u044F - \u0433\u0438\u0431\u043A\u043E\u0439.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u041D\u0435 \u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043A\u043E\u0434 \u043A\u0443\u0441\u043A\u0430\u043C\u0438 \u043F\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C - \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u0432 \u043C\u0438\u043A\u0441\u0438\u043D\u0430\u0445 \u0438 \u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440\u0430\u0445!</p></div><p><code class="nowrap">@/src/stylus/utils/_placeholders.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;./_mixins&quot;</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">&quot;./_typography&quot;</span><span class="token punctuation">;</span></span>

<span class="token comment">// Project placeholders</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Utilities</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token selector">$flex--center</span>
  <span class="token property-declaration"><span class="token property">display</span> flex</span>
  <span class="token property-declaration"><span class="token property">align-items</span> center</span>
  <span class="token property-declaration"><span class="token property">justify-content</span> center</span>

<span class="token selector"><span class="token comment">// Ellipsis to long string</span>
$lineOverflow</span>
  <span class="token property-declaration"><span class="token property">display</span> block</span>
  <span class="token property-declaration"><span class="token property">white-space</span> nowrap</span>
  <span class="token property-declaration"><span class="token property">overflow</span> hidden</span>
  <span class="token property-declaration"><span class="token property">text-overflow</span> ellipsis</span>

<span class="token selector"><span class="token comment">// \u0417\u0430\u0449\u0438\u0442\u0430 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u0442\u0435\u043A\u0441\u0442\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0432 \u0433\u0440\u0438\u0434\u0430\u0445</span>
$longLettersProtection</span>
  <span class="token property-declaration"><span class="token property">-ms-word-break</span> break-all</span>
  <span class="token property-declaration"><span class="token property">word-break</span> break-all</span>
  <span class="token property-declaration"><span class="token property">word-break</span> break-word</span>
  <span class="token property-declaration"><span class="token property">-webkit-hyphens</span> auto</span>
  <span class="token property-declaration"><span class="token property">-moz-hyphens</span> auto</span>
  <span class="token property-declaration"><span class="token property">-ms-hyphens</span> auto</span>
  <span class="token property-declaration"><span class="token property">hyphens</span> auto</span>


<span class="token comment">// Elements</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token selector"><span class="token comment">// Buttons</span>
$button</span>
  <span class="token property-declaration"><span class="token property">user-select</span> none</span>
  <span class="token property-declaration"><span class="token property">cursor</span> pointer</span>
  <span class="token property-declaration"><span class="token property">border</span> none</span>
  <span class="token property-declaration"><span class="token property">text-decoration</span> none</span>
  <span class="token property-declaration"><span class="token property">white-space</span> nowrap</span>
  <span class="token property-declaration"><span class="token property">outline</span> none</span>
  <span class="token property-declaration"><span class="token property">text-align</span> center</span>
  <span class="token property-declaration"><span class="token property">transition</span> background $effects.duration</span>


<span class="token comment">// Forms</span>

$<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$background<span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">background</span> $background</span>

  <span class="token selector">&amp;:hover</span>
    <span class="token property-declaration"><span class="token property">background</span> <span class="token func"><span class="token function">lighten</span><span class="token punctuation">(</span>$background<span class="token punctuation">,</span> $effects.amount<span class="token punctuation">)</span></span></span>

  <span class="token selector">&amp;:active<span class="token punctuation">,</span>
  &amp;:focus</span>
    <span class="token property-declaration"><span class="token property">background</span> <span class="token func"><span class="token function">darken</span><span class="token punctuation">(</span>$background<span class="token punctuation">,</span> $effects.amount<span class="token punctuation">)</span></span></span>

<span class="token selector">$input</span>
  <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token property-declaration"><span class="token property">appearance</span> none</span>
  <span class="token property-declaration"><span class="token property">-webkit-appearance</span> inherit</span>
  <span class="token property-declaration"><span class="token property">border</span> none</span>
  <span class="token property-declaration"><span class="token property">padding-left</span> $inputs.padding</span>
  <span class="token property-declaration"><span class="token property">padding-right</span> $inputs.padding</span>
  $<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token string">&quot;swimming&quot;</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;alena&quot;</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$inputs.background--default<span class="token punctuation">)</span></span>

  <span class="token selector">&amp;__wrapper</span>
    <span class="token property-declaration"><span class="token property">position</span> relative</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token property-declaration"><span class="token property">padding-bottom</span> <span class="token number">32</span><span class="token unit">px</span></span>

    <span class="token selector">&amp;--disabled</span>
      <span class="token property-declaration"><span class="token property">pointer-events</span> none</span>
      <span class="token property-declaration"><span class="token property">cursor</span> default</span>
      <span class="token property-declaration"><span class="token property">user-select</span> none</span>
      $<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token string">&quot;psy&quot;</span><span class="token punctuation">)</span></span>

    <span class="token selector">&amp;--error</span>
      <span class="token selector">.input__control<span class="token punctuation">,</span>
      .textarea__control</span>
        <span class="token property-declaration"><span class="token property">color</span> $colors.prestige</span>
        $<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$inputs.background--error<span class="token punctuation">)</span></span>

      <span class="token selector">.vs__dropdown-toggle</span>
        $<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$inputs.background--error<span class="token punctuation">)</span></span>

      <span class="token selector">.vs__selected</span>
        <span class="token property-declaration"><span class="token property">color</span> $colors.bird</span>

  <span class="token selector">&amp;__error</span>
    <span class="token atrule-declaration"><span class="token atrule">@extend</span> $lineOverflow</span>
    <span class="token property-declaration"><span class="token property">position</span> absolute</span>
    <span class="token property-declaration"><span class="token property">left</span> $inputs.padding</span>
    <span class="token property-declaration"><span class="token property">max-width</span> <span class="token string">&quot;calc(100% - %s)&quot;</span> <span class="token operator">%</span> $inputs.padding</span>
    <span class="token property-declaration"><span class="token property">color</span> $colors.bird</span>
    $<span class="token func"><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;natasha&quot;</span><span class="token punctuation">)</span></span>


<span class="token selector"><span class="token comment">// Shadows</span>
$shadow</span>
  <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">32</span><span class="token unit">px</span> $colors.shadows</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>\u0418\u043B\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0435\u043B\u0430\u0442\u044C \u043F\u0440\u0438\u043C\u0435\u0441\u0438 \u0431\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B - \u0437\u0430\u0431\u0435\u0433\u0430\u044F \u0432\u043F\u0435\u0440\u0435\u0434 (\u0441\u043C. \u0440\u0430\u0437\u0434\u0435\u043B Breakpoints) - \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043F\u0430\u0441\u0441\u0430\u0436 \u0441\u0442\u0430\u043B \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0432\u043D\u0443\u0442\u0440\u0438 \u043C\u0435\u0434\u0438\u0430-\u043C\u0438\u043A\u0441\u0438\u043D\u043E\u0432:</p><p><code class="nowrap">@/src/stylus/utils/_mixins.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector"><span class="token comment">// Utilities</span>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17);function e(t,l){return p}var c=s(a,[["render",e]]);export{c as default};
