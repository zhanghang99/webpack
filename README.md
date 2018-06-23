#webpack的基本配置

#entry/entry.json为多页面提供统一的入口html、js文件路径，统一以./src开始，打包出来的文件路径将与原src下的路径保持一致

#目前配置的主要依赖有es6 babel转义js压缩、url/file loader图片压缩，css/sass预编译，eslint代码检测等功能

#目录结构
#dist            .................................打包文件
#entry           .................................各级页面(html,js)路径
#node_modules    .................................package.json依赖包
#src             .................................开发文件
  #assets      .................................静态资源
  #utils       .................................js类工具文件
  #views       .................................各级页面视图
  #index.html  .................................首页视图
  #index.js    .................................首页引用js文件
  #index.scss  .................................首页引用css文件
#webpack-config  .................................webpack.config配置(分成base、dev、prod)
#.eslintrc.js    .................................eslint配置
#.gitignore      .................................禁止不需要的文件上传git文件配置
#.package.json   .................................项目依赖
#README.md       .................................项目说明