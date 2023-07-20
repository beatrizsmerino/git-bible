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
		config.plugin("eslint").use(require("eslint-webpack-plugin"), [
			{
				"fix": true,
				"extensions": [
					"js",
					"vue",
				],
			},
		]);

		config.plugin("stylelint").use(require("stylelint-webpack-plugin"), [
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
