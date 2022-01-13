<template>
	<footer class="footer">
		<div class="footer__copyright footer__item">
			<p>
				© Copyright 2019-{{ currentYear }}. Git Bible. @beatrizsmerino
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
		data() {
			return {
				currentYear: new Date().getFullYear()
			};
		}
	};
</script>

<style lang="scss" scoped>
	.footer {
		width: 100%;
		padding: 1.6rem 3.2rem;
		display: flex;
		justify-content: space-between;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99999;
		color: $color-light;
		font-size: 1.6rem;
		background-color: $color-brand-1;

		@include media('md', $dimension: 'height') {
			position: relative;
		}

		@include media('md') {
			position: relative;
		}

		@include media('sm') {
			text-align: center;
			flex-direction: column-reverse;
		}

		&__item {
			&:not(:first-child) {
				@include media('sm') {
					margin-bottom: 0.5rem;
				}
			}
		}
	}

	a {
		color: $color-light;

		&:hover {
			color: $color-white;
		}

		&.router-link-active {
			color: $color-white;
		}
	}
</style>
