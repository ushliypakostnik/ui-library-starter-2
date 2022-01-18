<template><h1 id="breakpoints" tabindex="-1"><a class="header-anchor" href="#breakpoints" aria-hidden="true">#</a> Breakpoints</h1>
<p>Переменные-брекпоинты лучше называть более интуитивно-понятно.</p>
<p><code class="nowrap">~/src/stylus/utils/_variables.styl</code></p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Breakpoints</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token variable-declaration"><span class="token variable">$breakpoints</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  tablet<span class="token punctuation">:</span> <span class="token number">768</span><span class="token unit">px</span><span class="token punctuation">,</span>
  desktop<span class="token punctuation">:</span> <span class="token number">1025</span><span class="token unit">px</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></span>
$breakpoints<span class="token punctuation">[</span><span class="token string">"mobile--max"</span><span class="token punctuation">]</span> = $breakpoints<span class="token punctuation">.</span>tablet - 1
$breakpoints<span class="token punctuation">[</span><span class="token string">"tablet--max"</span><span class="token punctuation">]</span> = $breakpoints<span class="token punctuation">.</span>desktop - 1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Основные точки перехода: в стилевой базе препроцессора в <code class="nowrap">px</code> и в константах скриптов библиотеки в <code class="nowrap">Number</code> - должны соответствовать друг-другу.</p>
</div>
<p><code class="nowrap">@/src/utils/сonstants.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Design constants</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DESIGN</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">BREAKPOINTS</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    tablet<span class="token operator">:</span> <span class="token number">768</span><span class="token punctuation">,</span>
    desktop<span class="token operator">:</span> <span class="token number">1025</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>В препроцессоре - мощнейшее, очень удобное средство - построенные на брекпоинтах примеси принимающие контент:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token comment">// Media</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

$<span class="token func"><span class="token function">no-gadgets</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>max-width $breakpoints.desktop--max<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>

$<span class="token func"><span class="token function">desktop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>min-width $breakpoints.desktop<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>

$<span class="token func"><span class="token function">gadgets</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>max-width $breakpoints.tablet--max<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>

$<span class="token func"><span class="token function">tablet</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>min-width $breakpoints.tablet<span class="token punctuation">)</span> <span class="token operator">and</span> <span class="token punctuation">(</span>max-width $breakpoints.tablet--max<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>

$<span class="token func"><span class="token function">not-mobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>min-width $breakpoints.tablet<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>

$<span class="token func"><span class="token function">mobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
  <span class="token atrule-declaration"><span class="token atrule">@media</span> only screen <span class="token operator">and</span> <span class="token punctuation">(</span>max-width $breakpoints.mobile--max<span class="token punctuation">)</span></span>
    <span class="token interpolation variable"><span class="token delimiter punctuation">{</span>block<span class="token delimiter punctuation">}</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>Использование в любом блоке стилей SFC:</p>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token selector">.selector</span>
  +$<span class="token func"><span class="token function">desktop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
    <span class="token comment">// styles only for desktops</span>

  +$<span class="token func"><span class="token function">tablet</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
    <span class="token comment">// styles only for tablet</span>

  +$<span class="token func"><span class="token function">mobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
    <span class="token comment">// styles only for mobile</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>В строгой традиции запрещается использование любых глобальных классов со стилями, за исключением анимаций для Vue и вынужденных кастомизаций действительно необходимых сторонних модулей где «классический ад с <code class="nowrap">!important</code>»))). Мы стараемся минимизировать количество зависимостей и «точечно» закрываем самые «дорогие», неподъемные по ресурсам проблемные места.</p>
</div>
<p>Точки перехода скриптов обрабатываются специальным модулем-помощником для экрана через matchMedia:</p>
<p><code class="nowrap">@/src/utils/screen-helper.ts</code></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Viewport utils module</span>
<span class="token comment">//////////////////////////////////////////////////////</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DESIGN</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ScreenHelper <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">TABLET</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token constant">DESIGN</span><span class="token punctuation">.</span><span class="token constant">BREAKPOINTS</span><span class="token punctuation">.</span>tablet<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token constant">DESKTOP</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token constant">DESIGN</span><span class="token punctuation">.</span><span class="token constant">BREAKPOINTS</span><span class="token punctuation">.</span>desktop<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">isMobile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(max-width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">TABLET</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">isTablet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(min-width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">TABLET</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px) and (max-width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">DESKTOP</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">isDesktop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(min-width: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">DESKTOP</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">getOrientation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(orientation: portrait)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'portrait'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">'landscape'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    isMobile<span class="token punctuation">,</span>
    isTablet<span class="token punctuation">,</span>
    isDesktop<span class="token punctuation">,</span>
    getOrientation<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ScreenHelper<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>Для того чтобы и компоненты библиотеки и дочерних проектов могли всегда верно определять типоразмер устройства с помощью модуля можно обновлять переменные в событии ресайза:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> ScreenHelper <span class="token keyword">from</span> <span class="token string">'../utils/screen-helper.ts'</span><span class="token punctuation">;</span> <span class="token comment">// в компонентах библиотеки</span>
<span class="token comment">// import ScreenHelper from 'ui-library-starter-2/src/utils/screen-helper.ts'; // в дочерних проектах</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      isMobile<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      isTablet<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      isDesktop<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onWindowResize<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onWindowResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onWindowResize<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onWindowResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log('onWindowResize!!!!');</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isMobile <span class="token operator">=</span> ScreenHelper<span class="token punctuation">.</span><span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isTablet <span class="token operator">=</span> ScreenHelper<span class="token punctuation">.</span><span class="token function">isTablet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>isDesktop <span class="token operator">=</span> ScreenHelper<span class="token punctuation">.</span><span class="token function">isDesktop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
