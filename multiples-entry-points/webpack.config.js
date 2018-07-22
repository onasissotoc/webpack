var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config ={
    mode: 'development',
    entry:{
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js') ,
        contacto: path.resolve(__dirname, 'src/js/contacto.js') ,
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
                // Aqui van con los loaders
                // test: que tipo de archivo quiero reconocer,
                // use que loader se va  a encargar del archivo
                test: /\.css$/,
                // use:[
                //     'style-loader','css-loader'
                // ]
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        //aqui van los plugins
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
};

module.exports = config;