// import adapter from "@sveltejs/adapter-static";
import netlify from "@sveltejs/adapter-netlify";
// +const netlify = require('@sveltejs/adapter-netlify')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
	adapter: netlify()
    // adapter: adapter(),
    // paths: {
    //   base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
    // },
  },
};

export default config;