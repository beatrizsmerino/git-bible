<template>
	<footer class="footer">
		<div>
			<p>© Copyright 2019. Git Bible. beatrizsmerino</p>
		</div>

		<div>
			<nav class="nav">
				<router-link to="/bibliografy" class="nav__item">Bibliografy</router-link>
			</nav>
		</div>
	</footer>
</template>


<script>
export default {

};
</script>


<style lang="scss" scoped>
.footer {
	padding: 1rem 2rem;
	display: flex;
	justify-content: space-between;
	color: $color-white;
	background-color: $color-brand-2-light;
}
a {
	color: $color-brand-2;
}
</style>
