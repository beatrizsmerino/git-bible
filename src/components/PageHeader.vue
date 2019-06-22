<template>
	<header class="page-header">
		<nav class="nav">
			<router-link to="/" class="nav__item">Home</router-link>
			<router-link to="/gitflow" class="nav__item">Git Flow</router-link>
			<router-link to="/bibliografy" class="nav__item">Bibliografy</router-link>
		</nav>
	</header>
</template>



<script>
export default {

};
</script>



<style lang="scss" scoped>
.page-header {
	width: 100%;
	height: 6rem;
	padding: 1.5rem 3rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: fixed;
	top: 0;
	left:0;
	z-index: 999;
	background-color: $color-brand-1;

	&__item {
		display: flex;
	}
}

.nav {
	font-size: 1.5rem;
	font-weight: 300;

	&__item {
		color: $color-brand-2;

		&:not(:last-child) {
			margin-right: 2rem;
		}

		&.router-link-exact-active {
			color: $color-white;
		}
	}
}
</style>
