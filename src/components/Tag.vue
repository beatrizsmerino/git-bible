<template>
	<div class="tag">
		<ul class="tag__list">
			<li
				v-for="(item, index) in tagList"
				:key="index"
				class="tag__item"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'TagList',
		props: {
			tagList: {
				type: Array,
				required: true
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tag {

		&__list {
			margin-left: -0.5rem;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			list-style: none;
		}

		&__item {
			margin: 0.5rem;
			padding: 0.5rem 0.8rem;
			font-size: 1.5rem;
			color: $color-brand-2;
			border-left: 0.5rem solid $color-brand-2-light;
			background-color: $color-white;
		}

		&--theme-light {
			.tag {
				&__item {
					background-color: $color-light;
				}
			}
		}
	}
</style>
