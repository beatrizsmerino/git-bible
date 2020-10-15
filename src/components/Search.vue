<template>
	<div class="search">
		<form class="form" method action>
			<div class="form__field">
				<input class="form__input" type="text" placeholder="Search command"/>
				<i class="form__icon icon icon-search"></i>
			</div>
		</form>
	</div>
</template>



<script>
	export default {
		name: 'Search',
	};
</script>



<style lang="scss" scoped>
	.form {
		max-width: 800px;
		margin: 2rem auto 0;

		&__field {
			position: relative;
		}

		&__input {
			width: 100%;
			padding: 1.92rem 3.2rem;
			font-size: 2rem;
			color: $color-brand-2;
			border: 0.2rem solid $color-brand-1;
		}

		&__icon {
			position: absolute;
			right: 3.2rem;
			top: 50%;
			transform: translate(0, -50%);
			font-size: 3.2rem;
			color: $color-brand-1;
		}
	}

</style>
