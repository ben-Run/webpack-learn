
// babel config
const presets = [
  ["@babel/preset-env", {
    // "useBuiltIns": "usage",
    // "targets": {
		// 	"browsers": "last 2 versions, not ie <= 9"
		// }
  }]
]

const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-runtime",
  // ["@babel/plugin-transform-runtime", {
	// 	"helpers": false
	// }]
 ]

module.exports = {
  presets,
  plugins
}
