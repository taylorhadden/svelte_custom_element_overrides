let svelte = require('rollup-plugin-svelte')
let resolve = require('rollup-plugin-node-resolve')

module.exports = {
	input: 'client/index.js',
	output: {
		file: '__build__/index.js',
		format: 'esm'
	},
	plugins: [
		resolve(),
		svelte()
	]
}