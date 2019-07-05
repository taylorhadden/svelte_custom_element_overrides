# Svelte and Custom Element Overrides

This repository exists to illustrate a bug in Svelte with custom element overrides using the `is="element-name"` property. At the moment, the way Svelte is creating elements breaks the usage of this property. My completely naive suspicion is that elements are being created with [document.CreateElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement#Parameters) without including the second `is: 'element-name'` parameter.

You can see this behavior in action by installing this project with `node i` and running it with `node run dev`. An express server will start up at localhost:4001 and show a quick example of how an element overriding `<a>` does not work when written directly in Svelte, but does work when placed on the page as a raw string.

While the raw string is a simi-usable workaround, it is not ideal as it means one does not get the benefits of svelte's property-setting functionality with standard custom elements.

Thank you for taking the time to read this.
