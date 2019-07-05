<h1>Custom Elements</h1>
This test expects Firefox or Chrome.

<h2>Basic Element</h2>
<my-element></my-element>

This works great.

<h2>Element Overrides</h2>
Overrides of elements are where the problem lies.
<h3>Svelte</h3>
Invoking an override with "is='element-name'"
<a href is='element-override'>Doesn't Work</a>

<h3>Raw String</h3>
Invoking an override with an {@html "{@html}"} raw string
{@html "<a href is='element-override'>Didn't Work</a>"}

<h2>Thanks for Looking</h2>
It would be amazing if custom element overrides were natively supported.