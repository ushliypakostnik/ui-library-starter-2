<template><h1 id="datepicker" tabindex="-1"><a class="header-anchor" href="#datepicker" aria-hidden="true">#</a> Datepicker</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>Component providing a classic datapicker with rotating qualities:</p>
<ul>
<li>Easy mode switching: single / band</li>
<li>Range The mode is made &quot;on one sheet&quot;</li>
<li>Mode of operation with weeks, months, quarterly periods and years</li>
<li>Works in both unixtime and ISO formats</li>
</ul>
<h2 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> Connection</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- unixtime --></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Datepicker</span>
      <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">:allowFrom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1405398400<span class="token punctuation">"</span></span>
      <span class="token attr-name">:allowTo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1705398400<span class="token punctuation">"</span></span>
      <span class="token attr-name">:yearsFuture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">:yearsPast</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span>
      <span class="token attr-name">panel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>quarters<span class="token punctuation">"</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dateSelect<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  
    <span class="token comment">&lt;!-- ISO --></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Datepicker</span>
      <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowFrom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2014-07-15T08:26:40+04:00<span class="token punctuation">"</span></span>
      <span class="token attr-name">allowTo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2024-01-16T12:46:40+03:00<span class="token punctuation">"</span></span>
      <span class="token attr-name">:yearsFuture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span>
      <span class="token attr-name">:yearsPast</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span>
      <span class="token attr-name">panel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>quarters<span class="token punctuation">"</span></span>
      <span class="token attr-name">:unixtime</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>
      <span class="token attr-name">@select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dateSelect<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">dateSelect</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>Name</strong></th>
<th style="text-align:left"><strong>Type</strong></th>
<th style="text-align:left"><strong>Description</strong></th>
<th style="text-align:right"><strong>Default</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>range</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">Widget mode: range / single. Default: range.</td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>locale</strong></td>
<td style="text-align:left">String,</td>
<td style="text-align:left">Locale. Currently, only the default Russian is supported.</td>
<td style="text-align:right"><code>'ru'</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>past</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">Accessibility of the past.</td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>future</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">Availability of the future.</td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>panel</strong></td>
<td style="text-align:left">String: <code>'days'</code>, <code>'weeks'</code>, <code>'months'</code>, <code>'quarters'</code>, <code>'years'</code></td>
<td style="text-align:left">Set the default bar for the range.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>showControls</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">Show control buttons (not used or customized).</td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>yearsCount</strong></td>
<td style="text-align:left">Number</td>
<td style="text-align:left">A complex parameter that determines how many years in the future and the past simultaneously from the current date should be shown.</td>
<td style="text-align:right"><code>2</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>yearsPast</strong></td>
<td style="text-align:left">Number</td>
<td style="text-align:left">A parameter that determines how many years in the past from the current date to show.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>yearsFuture</strong></td>
<td style="text-align:left">Number</td>
<td style="text-align:left">A parameter that determines how many years in the future from the current date to show.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>allowFrom</strong></td>
<td style="text-align:left">[Number, String]</td>
<td style="text-align:left">The date in the past from which dates are available.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>allowTo</strong></td>
<td style="text-align:left">[Number, String]</td>
<td style="text-align:left">The date in the future, the end of which dates are available.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>unixtime</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">The format for receiving (allowFrom, allowTo) and displaying dates. Default: unixtime, can be ISO-8601.</td>
<td style="text-align:right"><code>true</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>resetTitle</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Reset button text.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>submitTitle</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Submit button text.</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>presets</strong></td>
<td style="text-align:left">Array</td>
<td style="text-align:left">List of available presets (not used or customized).</td>
<td style="text-align:right"><code>['today', 'yesterday', 'last7days', 'last30days', 'last90days', 'last365days', 'custom']</code></td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<table>
<thead>
<tr>
<th style="text-align:left"><strong>Name</strong></th>
<th style="text-align:left"><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>@select</strong></td>
<td style="text-align:left">The event is triggered when a range or date in a single is selected.</td>
</tr>
<tr>
<td style="text-align:left"><strong>@update</strong></td>
<td style="text-align:left">The event is triggered when the submit button is clicked.</td>
</tr>
<tr>
<td style="text-align:left"><strong>@reset</strong></td>
<td style="text-align:left">The event is triggered when the reset button is pressed.</td>
</tr>
</tbody>
</table>
<p>Return:</p>
<div class="language-javasript ext-javasript line-numbers-mode"><pre v-pre class="language-javasript"><code>// With @reset: to === from === null, with @select and @update for a single: to === from
{
  to: null,
  from: null,
  panel: 'quarters'
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h3>
<div class="language-stylus ext-styl line-numbers-mode"><pre v-pre class="language-stylus"><code><span class="token variable-declaration"><span class="token variable">$width</span> <span class="token operator">=</span> <span class="token number">400</span><span class="token unit">px</span></span>
<span class="token variable-declaration"><span class="token variable">$range-color</span> <span class="token operator">=</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span>$colors.bird<span class="token punctuation">,</span> $opacites.psy<span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h2>
<div class="test-block">
  <Datepicker
    :range="true"
    :allowFrom="1405398400"
    :allowTo="1705398400"
    :yearsFuture="2"
    :yearsPast="4"
    panel="quarters"
  />
</div>
<h2 id="source-code" tabindex="-1"><a class="header-anchor" href="#source-code" aria-hidden="true">#</a> Source code</h2>
<p><code class="nowrap">@/src/components/Datepicker/Datepicker.vue</code></p>
<p>&lt;&lt;&lt; @/src/components/Datepicker/Datepicker.vue</p>
</template>
