import{c as n}from"./app.3da3a17b.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> Colors</h1><p>\u0410\u0431\u0441\u0442\u0440\u0430\u0433\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u0441\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u0437 \u0433\u0430\u0439\u0434\u043B\u0430\u0439\u043D\u0430 \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u0430-\u043C\u0430\u0440\u043A\u0435\u0440\u044B.</p><p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token comment">// Palette</span>
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
$colors<span class="token punctuation">[</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>sky
$colors<span class="token punctuation">[</span><span class="token string">&quot;header&quot;</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>stone
$colors<span class="token punctuation">[</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>rain
$colors<span class="token punctuation">[</span><span class="token string">&quot;placeholder&quot;</span><span class="token punctuation">]</span> = <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.sea<span class="token punctuation">,</span> $opacites.pop<span class="token punctuation">)</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u0412 \u043B\u044E\u0431\u043E\u043C \u043C\u0435\u0441\u0442\u0435 \u043A\u043E\u0434\u0430 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u0438\u043B\u0438 \u0441\u0435\u043A\u0446\u0438\u0438 \u0441\u0442\u0438\u043B\u0435\u0439 SFC (\u043F\u0440\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0430 \u0441\u0442\u0438\u043B\u0435\u0432\u043E\u0439 \u0431\u0430\u0437\u044B) \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 \u0438\u043B\u0438 \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u0430:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.primary</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="themezation" tabindex="-1"><a class="header-anchor" href="#themezation" aria-hidden="true">#</a> Themezation</h2><p>\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0430\u0442\u043E\u043C\u044B \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0446\u0432\u0435\u0442\u043E\u0432\u043E\u0439 \u0442\u0435\u043C\u044B. \u041D\u043E \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0440\u0443\u0433\u0438\u0435 \u0442\u0435\u043C\u044B \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u0434\u043D\u0435\u0432\u043D\u043E\u0439 \u0438 \u043D\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0436\u0438\u043C \u0432 javascript, \u0432 \u0444\u0430\u0439\u043B\u0435 <code class="nowrap">@/src/utils/\u0441onstants.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">THEMES</span><span class="token operator">:</span> TConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  theme1<span class="token operator">:</span> <span class="token string">&#39;theme1&#39;</span><span class="token punctuation">,</span>
  theme2<span class="token operator">:</span> <span class="token string">&#39;theme2&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">MODES</span><span class="token operator">:</span> TConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode1<span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">,</span>
  mode2<span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span>
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
        cat<span class="token operator">:</span> <span class="token string">&#39;#fed564&#39;</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">&#39;#8bc24c&#39;</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">&#39;#fd5f00&#39;</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">&#39;#515bd4&#39;</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">&#39;#13334c&#39;</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">&#39;#dddddd&#39;</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">&#39;#b1b1b1&#39;</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">&#39;#0d2233&#39;</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// Dark</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">&#39;#fed564&#39;</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">&#39;#8bc24c&#39;</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">&#39;#fd5f00&#39;</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">&#39;#515bd4&#39;</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">&#39;#13334c&#39;</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">&#39;#dddddd&#39;</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">&#39;#b1b1b1&#39;</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">&#39;#163C59&#39;</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;#0d2233&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token constant">THEMES</span><span class="token punctuation">.</span>theme2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// Light</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">&#39;#fd5f00&#39;</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">&#39;#8bc24c&#39;</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">&#39;#fed564&#39;</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">&#39;#515bd4&#39;</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">&#39;#3A0061&#39;</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">&#39;#f9f9f9&#39;</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">&#39;#b1b1b1&#39;</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">&#39;#1F0033&#39;</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// Dark</span>
      <span class="token punctuation">[</span><span class="token constant">MODES</span><span class="token punctuation">.</span>mode2<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// Palette</span>
        cat<span class="token operator">:</span> <span class="token string">&#39;#fd5f00&#39;</span><span class="token punctuation">,</span>
        dog<span class="token operator">:</span> <span class="token string">&#39;#8bc24c&#39;</span><span class="token punctuation">,</span>
        bird<span class="token operator">:</span> <span class="token string">&#39;#fed564&#39;</span><span class="token punctuation">,</span>
        wood<span class="token operator">:</span> <span class="token string">&#39;#515bd4&#39;</span><span class="token punctuation">,</span>
        stone<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        sea<span class="token operator">:</span> <span class="token string">&#39;#3A0061&#39;</span><span class="token punctuation">,</span>
        sky<span class="token operator">:</span> <span class="token string">&#39;#f9f9f9&#39;</span><span class="token punctuation">,</span>
        ball<span class="token operator">:</span> <span class="token string">&#39;#b1b1b1&#39;</span><span class="token punctuation">,</span>
        rain<span class="token operator">:</span> <span class="token string">&#39;#efefef&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// Dependencies colors</span>
        text<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
        header<span class="token operator">:</span> <span class="token string">&#39;#5D009C&#39;</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">&#39;#1F0033&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><p>\u0422\u0435\u043F\u0435\u0440\u044C \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C Custom Properties c \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044E\u0449\u0438\u043C\u0438 \u0438\u043C\u0435\u043D\u0430\u043C\u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445, \u043F\u043E\u0441\u043B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u0435\u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440\u0430 \u043E\u0441\u0442\u0430\u044E\u0449\u0438\u0445\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u043E\u043B\u043B\u0431\u044D\u043A\u0430:</p><div class="language-stylus ext-styl line-numbers-mode"><pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.text</span>
  <span class="token property-declaration"><span class="token property">color</span> <span class="token func"><span class="token function">var</span><span class="token punctuation">(</span><span class="token operator">-</span>-text<span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,11);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};
