const path = require('path');
const port = process.env.port || process.env.npm_config_port || 9528

function resolve(dir) {
    return path.join(__dirname, dir)
}

const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
    publicPath: "/",
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        https: false,
        // proxy: {
        //     "/api": {
        //         target: '',
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: {
        //             // '^/api': '/'
        //         }
        //     },
        // }
    },
    configureWebpack: config => {
    
    },
    chainWebpack: config => {
        config.resolve.symlinks(false);
        config.plugin('html').tap(args => {
            args[0].chunksSortMode = 'none';
            return args;
        });
        config.optimization.minimizer('terser').tap((args) => {
            args[0].terserOptions.compress.pure_funcs = ['console.log']
            return args
        })
        config.resolve.alias
        .set('@', resolve('src'))
        .set('static', resolve('public'))
    }
    
}
