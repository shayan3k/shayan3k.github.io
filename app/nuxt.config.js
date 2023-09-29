export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // enviroment variables
  env: {
    NUXT_PUBLIC_PHONE_NUMBER: process.env.NUXT_PUBLIC_PHONE_NUMBER || "",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_description || "SHAYAN MOTALEBI",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Loading
  loading: { color: "#fff" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    { src: "@/plugins/jquery.min.js", ssr: false },
    { src: "@/plugins/gsap.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "nuxt-animejs",
    "@nuxtjs/fontawesome",
    "@nuxtjs/color-mode",
  ],
  host: "0.0.0.0",
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    classSuffix: "",
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },

    meta: {
      /* meta options */
      title: "Shayan Motalebi ✌(ツ)",
      author: "Shayan Motalebi",
      description: "Savvy Full Stack Developer",
      theme_color: "#440813",
      lang: "en",
    },
    icon: {
      fileName: "favicon.png",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // router: {
  //   base: "/app/",
  // },
  build: {
    extractCSS: true,
    publicPath: "/_nuxt/",

    /*
     ** You can extend webpack config here
     */
    // vendor: ["jquery"],
    // plugins: [
    //   // set shortcuts as global for bootstrap
    //   new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     jquery: "jquery",
    //     "window.jQuery": "jquery",
    //   }),
    // ],
    // extend(config, { isDev, isClient, isServer }) {
    //   if (isDev && isClient) {
    //     // expose jquery to global
    //     config.module.rules.push({
    //       test: require.resolve("jquery"),
    //       use: [
    //         {
    //           loader: "expose-loader",
    //           options: "$",
    //         },
    //       ],
    //     });
    //   }
    // },
  },
};
