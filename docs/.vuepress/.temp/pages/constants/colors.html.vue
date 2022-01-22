<template><h1 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> Colors</h1>
<p>Абстрагируйте все цвета из гайдлайна в короткие имена-маркеры.</p>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Palette</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token variable-declaration"><span class="token variable">$colors</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  cat<span class="token punctuation">:</span> <span class="token hexcode">#fed564</span><span class="token punctuation">,</span>
  dog<span class="token punctuation">:</span> <span class="token hexcode">#8bc24c</span><span class="token punctuation">,</span>
  bird<span class="token punctuation">:</span> <span class="token hexcode">#fd5f00</span><span class="token punctuation">,</span>
  wood<span class="token punctuation">:</span> <span class="token hexcode">#515bd4</span><span class="token punctuation">,</span>
  stone<span class="token punctuation">:</span> <span class="token hexcode">#ffffff</span><span class="token punctuation">,</span>
  sea<span class="token punctuation">:</span> <span class="token hexcode">#13334c</span><span class="token punctuation">,</span>
  sky<span class="token punctuation">:</span> <span class="token hexcode">#0d2233</span><span class="token punctuation">,</span>
  ball<span class="token punctuation">:</span> <span class="token hexcode">#b1b1b1</span><span class="token punctuation">,</span>
  rain<span class="token punctuation">:</span> <span class="token hexcode">#efefef</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
<span class="token comment">// Dependencies colors</span>
$colors<span class="token punctuation">[</span><span class="token string">"text"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>sky
$colors<span class="token punctuation">[</span><span class="token string">"header"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>stone
$colors<span class="token punctuation">[</span><span class="token string">"content"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>rain
$colors<span class="token punctuation">[</span><span class="token string">"placeholder"</span><span class="token punctuation">]</span> = <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.sea<span class="token punctuation">,</span> $opacites.pop<span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>В любом месте кода препроцессора или секции стилей SFC (при условии импорта стилевой базы) библиотеки или дочерних проектов вы можете передавать правильные цвета:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.primary</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="themezation" tabindex="-1"><a class="header-anchor" href="#themezation" aria-hidden="true">#</a> Themezation</h2>
<p>Переменные препроцессора предоставляют атомы основной цветовой темы. Но вы можете добавлять другие темы содержащие дневной и ночной режим в javascript, в файле <code class="nowrap">@/src/utils/сonstants.ts</code>:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">THEMES</span><span class="token operator">:</span> TConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  theme1<span class="token operator">:</span> <span class="token string">'theme1'</span><span class="token punctuation">,</span>
  theme2<span class="token operator">:</span> <span class="token string">'theme2'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MODES</span><span class="token operator">:</span> TConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode1<span class="token operator">:</span> <span class="token string">'light'</span><span class="token punctuation">,</span>
  mode2<span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Design constants</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DESIGN</span><span class="token operator">:</span> TConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token constant">THEMES</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token constant">THEMES</span><span class="token punctuation">.</span>theme1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Light</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">'#fed564'</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">'#8bc24c'</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">'#fd5f00'</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">'#515bd4'</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">'#13334c'</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">'#dddddd'</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">'#b1b1b1'</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">'#0d2233'</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// Dark</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">'#fed564'</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">'#8bc24c'</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">'#fd5f00'</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">'#515bd4'</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">'#13334c'</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">'#dddddd'</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">'#b1b1b1'</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">'#163C59'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'#0d2233'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token constant">THEMES</span><span class="token punctuation">.</span>theme2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Light</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">'#fd5f00'</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">'#8bc24c'</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">'#fed564'</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">'#515bd4'</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">'#3A0061'</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">'#f9f9f9'</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">'#b1b1b1'</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">'#1F0033'</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// Dark</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">'#fd5f00'</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">'#8bc24c'</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">'#fed564'</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">'#515bd4'</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">'#3A0061'</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">'#f9f9f9'</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">'#b1b1b1'</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">'#efefef'</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">'#ffffff'</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">'#5D009C'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'#1F0033'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><p>Теперь можно использовать Custom Properties c соответсвующими именами, после переменных препроцессора остающихся в качестве фоллбэка:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.text</span>
  <span class="token property-declaration"><span class="token property">color</span> <span class="token func"><span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span>-text<span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
