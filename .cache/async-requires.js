// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-home-home-jsx": () => import("./../src/pages/home/Home.jsx" /* webpackChunkName: "component---src-pages-home-home-jsx" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-post-post-jsx": () => import("./../src/pages/post/Post.jsx" /* webpackChunkName: "component---src-pages-post-post-jsx" */)
}

