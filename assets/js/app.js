// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import css from "../css/app.css"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"
import Vue from 'vue'
import router from './router'
import App from './app.vue'
import './plugins/vuetify'

new Vue({
  router,
  el: "#vue-app",
  render: h => h(App)
})

// Import local files
//
// Local files can be imported directly using relative paths, for example:
// import socket from "./socket"
