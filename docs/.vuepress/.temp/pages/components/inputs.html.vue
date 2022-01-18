<template><h1 id="inputs-js" tabindex="-1"><a class="header-anchor" href="#inputs-js" aria-hidden="true">#</a> inputs.js</h1>
<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h2>
<p>Mixin additional functionality for inputs fields.</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td style="text-align:left"><strong>value</strong></td>
<td style="text-align:left">String</td>
<td style="text-align:left">Sync value</td>
<td style="text-align:right"><strong>required</strong></td>
</tr>
<tr>
<td style="text-align:left"><strong>placeholder</strong></td>
<td style="text-align:left">[String, null]</td>
<td style="text-align:left">placeholder</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>disabled</strong></td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">Is input disabled</td>
<td style="text-align:right"><code>false</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>error</strong></td>
<td style="text-align:left">[String, null]</td>
<td style="text-align:left">Is error, error message</td>
<td style="text-align:right"><code>null</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>onFocus</strong></td>
<td style="text-align:left">Function</td>
<td style="text-align:left">Callback on focus</td>
<td style="text-align:right"><code>() =&gt; {}</code></td>
</tr>
<tr>
<td style="text-align:left"><strong>onBlur</strong></td>
<td style="text-align:left">Function</td>
<td style="text-align:left">Callback on blur</td>
<td style="text-align:right"><code>() =&gt; {}</code></td>
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
<td style="text-align:left"><strong>focus</strong></td>
<td style="text-align:left">Emit on focus</td>
</tr>
<tr>
<td style="text-align:left"><strong>blur</strong></td>
<td style="text-align:left">Emit on blur</td>
</tr>
<tr>
<td style="text-align:left"><strong>input</strong></td>
<td style="text-align:left">Emit on input</td>
</tr>
</tbody>
</table>
<p><code classs="nowrap">@/src/mixins/inputs.js</code></p>
<p>&lt;&lt;&lt; @/src/mixins/inputs.js</p>
</template>
