module.exports = {
    chainWebpack: (config) => {
      config.module
        .rule('svg')
        .test(/\.svg$/)
        .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[hash:8].[ext]',
          outputPath: 'images/',
        });
    },
  };
  