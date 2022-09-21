
module.exports = ({
  transpileDependencies: true,
  lintOnSave:false,
  // 项目打包之后白屏问题
  publicPath:"./",
  devServer:{
    // 端口号
    port:9999,
    // 主机号
    host:'localhost',
    // 启动项目是否打开浏览器
    open:true,
    // 是否开启https
    https:false,
    //配置跨域
    proxy:{
      //代理名称
      // "/dev-api",
      [process.env.VUE_APP_BASE_API]:{
        //跨域地址
      target:process.env.VUE_APP_SERVICE_URL,
      // 开启跨域
      changeOrigin :true,
      // 路径重写
      pathRewrite:{
        // "^/dev-api":''
        ["^"+process.env.VUE_APP_BASE_API]:''
      }
      },
      // [process.env.VUE_APP_BASE_API1]:{
      //   //跨域地址
      // target:'process.env.VUE_APP_SERVICE_URL1',
      // // 开启跨域
      // changeOrigin :true,
      // // 路径重写
      // pathRewrite:{
      //   // "^/dev-api":''
      //   ["^"+process.env.VUE_APP_BASE_API1]:''
      // }
      // },
    //   "/dev-api":{
    //     target:"http://localhost:4000",
    //     changeOrigin :true,
    //     pathRewrite:{
    //        "^/dev1-api":''
    //   }
    // }
  },
 
 }
 });
