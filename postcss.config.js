const postcssCustomMedia = require('postcss-custom-media');

module.exports = (ctx) => ({
    parser: ctx.parser ? 'sugarss' : false,
    map: ctx.env === 'development' ? ctx.map : false,
    plugins: {
      'postcss-import': {},
      'postcss-preset-env': {},
      cssnano: ctx.env === 'production' ? {} : false,
    'postcss-custom-media': postcssCustomMedia(/* pluginOptions */),
    }
  })

// https://github.com/michael-ciniawsky/postcss-load-config

  //PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.