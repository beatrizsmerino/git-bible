module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/git-bible/' : '/',
	lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/_styles.scss";`
			}
		}
	},
	chainWebpack: config => {
		config.module.rule('eslint').use('eslint-loader').
			options({
				fix: true
			});
	}
};
