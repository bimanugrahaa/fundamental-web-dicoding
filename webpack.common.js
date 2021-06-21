const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
                test: /\.(png|gif|svg)$/i,
                use: [
                    'file-loader?name=assets/[name].[ext]'
                ]
        },
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}