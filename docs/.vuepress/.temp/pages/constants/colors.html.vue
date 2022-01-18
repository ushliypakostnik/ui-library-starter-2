<template><h1 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> Colors</h1>
<p>Абстрагируйте все цвета из гайдлайна в короткие имена-маркеры.</p>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Palette</span>
<span class="token comment">//////////////////////////////////////////////////////</span>
<span class="token variable-declaration"><span class="token variable">$colors</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  cat<span class="token punctuation">:</span> <span class="token hexcode">#515bd4</span><span class="token punctuation">,</span>
  dog<span class="token punctuation">:</span> <span class="token hexcode">#ffffff</span><span class="token punctuation">,</span>
  bird<span class="token punctuation">:</span> <span class="token hexcode">#fd5f00</span><span class="token punctuation">,</span>
  wood<span class="token punctuation">:</span> <span class="token hexcode">#fed564</span><span class="token punctuation">,</span>
  stone<span class="token punctuation">:</span> <span class="token hexcode">#8bc24c</span><span class="token punctuation">,</span>
  sea<span class="token punctuation">:</span> <span class="token hexcode">#13334c</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
<span class="token comment">// Dependencies colors</span>
$colors<span class="token punctuation">[</span><span class="token string">"text"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>sea
$colors<span class="token punctuation">[</span><span class="token string">"placeholder"</span><span class="token punctuation">]</span> = <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.sea<span class="token punctuation">,</span> $opacites.rock<span class="token punctuation">)</span></span>
$colors<span class="token punctuation">[</span><span class="token string">"primary"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>cat
$colors<span class="token punctuation">[</span><span class="token string">"secondary"</span><span class="token punctuation">]</span> = $colors<span class="token punctuation">.</span>dog
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>В любом месте кода препроцессора или секции стилей SFC (при условии импорта стилевой базы) библиотеки или дочерних проектов вы можете передавать правильные цвета:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  <span class="token property-declaration"><span class="token property">color</span> $colors.primary</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
