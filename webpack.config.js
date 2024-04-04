const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: "./src/index.js",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|png|jpeg|jpg)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(woff|woff2|otf|ttf)$/i,
				type: "asset/resource"
			}
		]
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			inject: "head",
			scriptLoading: "defer"
		})
	]
};
