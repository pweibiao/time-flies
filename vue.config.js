module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: {
    devtool: "source-map"
  },
  devServer: {
    port: 8888,
    proxy: {
      '/api':{
        target: 'http://192.168.88.190:8090', // PWB
        ws: false, // 是否代理websockets
        changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    }
  }
};
