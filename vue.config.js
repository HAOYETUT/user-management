const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 跨域
  devServer: {
    port: 8086,
    proxy: 'http://localhost:8090'
  },
})
