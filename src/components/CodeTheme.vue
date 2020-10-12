<template>
	<div>
		<code class="code-theme">
			<label class="switch-theme" v-on:change="switchTheme">
				<input class="switch-theme__field" type="checkbox">
				<span class="switch-theme__bullet switch-theme__bullet--rounded"></span>
			</label>
			{{code}}
		</code>
	</div>
</template>



<script>
	export default {
		name: 'CodeTheme',
		props: {
			code: String,
		},
		methods: {
			switchTheme: function(event) {
				const $thisSwitchField = event.target;
				const $thisSwitchParent = $thisSwitchField.parentNode.parentNode;

				if ($thisSwitchParent && $thisSwitchField.checked) {
					$thisSwitchParent.classList.remove("code-theme--light");
					$thisSwitchParent.classList.add("code-theme--dark");
				} else {
					$thisSwitchParent.classList.remove("code-theme--dark");
					$thisSwitchParent.classList.add("code-theme--light");
				}
			}
		}
	};
</script>



<style lang="scss" scoped>
	.code-theme{
		width: 100%;
		padding: 1rem;
		position: relative;
		display: inline-block;
		font-weight: 600;
		color: $color-brand-3;
		border-radius: 0.4rem;
		background-color: $color-white;

		&--dark{
			color: $color-brand-1;
			background-color: $color-brand-2;
		}
	}

	.switch-theme {
		width: 2.8rem;
		height: 1.4rem;
		display: inline-block;
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;

		&__field {
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: 50%;
			left: 0.3rem;
			transform: translate(0, -50%);
			opacity: 0;

			&:checked + .switch-theme__bullet:before {
				left: initial;
				right: 0.3rem;
				background-color: $color-brand-2;
			}
		}

		&__bullet {
			width: 100%;
			height: 1.4rem;
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			background-color: $color-brand-2-light;
			transition: 0.4s;
			cursor: pointer;

			&:before {
				content: "";
				width: 1rem;
				height: 1rem;
				display: inline-block;
				position: absolute;
				left: 0.3rem;
				top: 50%;
				transform: translate(0, -50%);
				background-color: $color-silver;
				transition: 0.4s;
			}

			&--rounded {
				border-radius: 1rem;

				&:before {
					border-radius: 50%;
				}
			}
		}
	}
</style>