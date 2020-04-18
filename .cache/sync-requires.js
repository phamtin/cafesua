const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("G:\\cafesua\\.cache\\dev-404-page.js"))),
  "component---src-pages-home-home-jsx": hot(preferDefault(require("G:\\cafesua\\src\\pages\\home\\Home.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("G:\\cafesua\\src\\pages\\index.js"))),
  "component---src-pages-post-post-jsx": hot(preferDefault(require("G:\\cafesua\\src\\pages\\post\\Post.jsx")))
}

