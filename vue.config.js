const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
	"publicPath": process.env.NODE_ENV === "production" ? "/git-bible/" : "/",
	"lintOnSave": true,
	"css": {
		"loaderOptions": {
			"sass": {
				"data": `@import "@/assets/scss/_styles.scss";`,
			},
		},
	},
	"chainWebpack": config => {
		config.plugin("eslint").use(ESLintPlugin, [
			{
				"fix": true,
				"extensions": [
					"js",
					"vue",
				],
			},
		]);

		config.plugin("stylelint").use(StylelintPlugin, [
			{
				"fix": true,
				"files": [
					"src/**/*.vue",
					"src/**/*.scss",
				],
			},
		]);
	},
};
