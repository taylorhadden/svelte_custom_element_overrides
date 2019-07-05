import App from './App.svelte'
import './customElements'

document.addEventListener('DOMContentLoaded', () => {
	let app = new App({
		target: document.getElementById('Test')
	})
}, false)