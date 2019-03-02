const path = require("path");

module.exports = {
	entry: "./built/src/Web/index.js",
	output: {
		path: path.resolve(__dirname, "docs/dist"),
		filename: "converter.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.shorttxt/i,
				use: "raw-loader",
			}
		]
	},
	mode: "development"
};
