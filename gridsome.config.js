const autoprefixer = require('autoprefixer')
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssNested = require('postcss-nested')

const postcssPlugins = [tailwind(), postcssNested(), autoprefixer()]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}

// --- NOTE: Changes here require a server restart --- //
