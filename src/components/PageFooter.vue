<template>
	<footer class="footer">
		<div class="footer__copyright footer__item">
			<p>
				© Copyright 2019-2020. Git Bible. @beatrizsmerino
			</p>
		</div>

		<div class="footer__nav footer__item">
			<nav class="nav">
				<router-link
					to="/bibliografy"
					class="nav__item"
				>
					Bibliografy
				</router-link>
			</nav>
		</div>
	</footer>
</template>


<script>
	export default {
		name: 'PageFooter',
	};
</script>


<style lang="scss" scoped>
	.footer {
		padding: 1.6rem 3.2rem;
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 2;
		color: $color-white;
		font-size: 1.6rem;
		background-color: $color-brand-2-light;

		@include media("sm") {
			text-align: center;
			flex-direction: column-reverse;
		}

		&__item{
			&:not(:first-child){
				@include media("sm") {
					margin-bottom: 0.5rem;
				}
			}
		}
	}

	a {
		color: $color-brand-2;
	}
</style>
