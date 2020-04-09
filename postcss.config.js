module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-preset-env": {},
    "autoprefixer": {
      "browsers": [
          "defaults",
          "not ie < 8",
          "last 2 versions",
          "> 1%",
          "iOS 7",
          "last 3 iOS versions"
      ]
  }
 }
}