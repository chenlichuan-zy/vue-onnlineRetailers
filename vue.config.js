const path = require('path')
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  publicPath: '',
  productionSourceMap: false, // 不在production环境使用SourceMap
  devServer: {
    // 跨域
    port: 8080, // 端口号
    open: true, // 配置自动启动浏览器
    proxy: {
      // 配置跨域处理 可以设置多个
      '/api': {
        target: ' http://localhost:7300/mock/5dcbf4265c3af8431c2f4875/api',
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
  }
}
