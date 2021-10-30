module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/git-bible/' : '/',
	lintOnSave: false,
	css: {
		loaderOptions: {
			sass: {
				data: `@import "@/assets/scss/_styles.scss";`
			}
		}
	}
};
