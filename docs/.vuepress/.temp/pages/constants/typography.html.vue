<template><h1 id="typography" tabindex="-1"><a class="header-anchor" href="#typography" aria-hidden="true">#</a> Typography</h1>
<p>Абстрагируйте все гарнитуры из гайдлайна в короткие имена-маркеры.</p>
<p><code class="nowrap">~/src/stylus/utils/_typography.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Typography</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Typographic Variables</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// Guide</span>

<span class="token variable-declaration"><span class="token variable">$font-family</span> <span class="token operator">=</span> <span class="token string">"Ubuntu"</span></span>

<span class="token variable-declaration"><span class="token variable">$font-weight</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  regular<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  bold<span class="token punctuation">:</span> <span class="token number">700</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>

<span class="token variable-declaration"><span class="token variable">$letter-spacing</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  normal<span class="token punctuation">:</span> normal
<span class="token punctuation">}</span></span>

<span class="token comment">// Universal Typographic Mixin</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token comment">// We use one, only one, Karl, a universal mixin for all cases!</span>

$<span class="token func"><span class="token function">text</span><span class="token punctuation">(</span>$name<span class="token punctuation">)</span></span>
  <span class="token property-declaration"><span class="token property">font-family</span> $font-family</span>
  <span class="token property-declaration"><span class="token property">letter-spacing</span> $letter-spacing.normal</span>

  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"elena"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">72</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">72</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.bold</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"olga"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">56</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">56</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.bold</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"anna"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">40</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">44</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.bold</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"maria"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">32</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">36</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.bold</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"katya"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">24</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">28</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.regular</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"alena"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">20</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">28</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.regular</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"natasha"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">16</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">28</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.regular</span>
  <span class="token statement"><span class="token keyword">if</span> $name <span class="token operator">==</span> <span class="token string">"nina"</span></span>
    <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">13</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">16</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> $font-weight.regular</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div></template>
