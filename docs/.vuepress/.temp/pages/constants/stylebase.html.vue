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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Теперь можно использовать всю эту кухню на компонентах:</p>
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
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"./_mixins"</span><span class="token punctuation">;</span></span>
<span class="token atrule-declaration"><span class="token atrule">@import</span> <span class="token string">"./_typography"</span><span class="token punctuation">;</span></span>

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

<span class="token selector"><span class="token comment">// Защита для больших блоков текста, например в гридах</span>
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
  $<span class="token func"><span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token string">"swimming"</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"alena"</span><span class="token punctuation">)</span></span>
  $<span class="token func"><span class="token function">input__background</span><span class="token punctuation">(</span>$inputs.background--default<span class="token punctuation">)</span></span>

  <span class="token selector">&amp;__wrapper</span>
    <span class="token property-declaration"><span class="token property">position</span> relative</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token property-declaration"><span class="token property">padding-bottom</span> <span class="token number">32</span><span class="token unit">px</span></span>

    <span class="token selector">&amp;--disabled</span>
      <span class="token property-declaration"><span class="token property">pointer-events</span> none</span>
      <span class="token property-declaration"><span class="token property">cursor</span> default</span>
      <span class="token property-declaration"><span class="token property">user-select</span> none</span>
      $<span class="token func"><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token string">"psy"</span><span class="token punctuation">)</span></span>

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
    <span class="token property-declaration"><span class="token property">max-width</span> <span class="token string">"calc(100% - %s)"</span> <span class="token operator">%</span> $inputs.padding</span>
    <span class="token property-declaration"><span class="token property">color</span> $colors.bird</span>
    $<span class="token func"><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">"natasha"</span><span class="token punctuation">)</span></span>


<span class="token selector"><span class="token comment">// Shadows</span>
$shadow</span>
  <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">32</span><span class="token unit">px</span> $colors.shadows</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>Или вы можете делать примеси без параметров для того чтобы - забегая вперед (см. раздел Breakpoints) - такой же пассаж стал доступен внутри медиа-миксинов:</p>
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
