class MyElement extends HTMLElement {
	connectedCallback() {
		this.style.backgroundColor = '#afa'
		this.innerHTML = 'Custom Element Loaded!'
	}
}

customElements.define('my-element', MyElement)

class ElementOverride extends HTMLAnchorElement {
	connectedCallback() {
		this.style.backgroundColor = '#afa'
		this.innerHTML = 'totally works'
	}
}

customElements.define('element-override', ElementOverride, {
	extends: 'a'
})
