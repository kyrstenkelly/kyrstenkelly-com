module.exports = {
  siteName: 'Kyrsten Kelly',
  siteUrl: 'http://kyrstenkelly.com',
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~/assets/styles/shared.scss";`
      },
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    }
  ]
}
