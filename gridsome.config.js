// Using SASS with gridsome:
// https://gridsome.org/docs/assets-css#use-sass--css-pre-processors

module.exports = {
  siteName: 'Kyrsten Kelly',
  siteUrl: 'http://kyrstenkelly.com',
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~/assets/styles/shared.scss";`
      },
    }
  }
}
