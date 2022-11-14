<template>
	<div class="tag">
		<ul class="tag__list">
			<li
				v-for="(item, index) in tagList"
				:key="index"
				class="tag__item"
				:class="{
					'tag__item--filter': tagType === 'filter',
					'is-active': tagListActive.includes(item)
				}"
				@click="activeTag(item)"
			>
				<span>
					{{ item }}
				</span>
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
			},
			tagType: {
				type: String
			}
		},
		data() {
			return {
				tagListActive: []
			};
		},
		methods: {
			activeTag(tag) {
				if (this.tagType === 'filter') {
					if (this.tagListActive.includes(tag)) {
						this.tagListActive.splice(
							this.tagListActive.indexOf(tag),
							1
						);
					} else {
						this.tagListActive.push(tag);
					}
				}
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
			cursor: pointer;

			&--filter {
				background-color: $color-light;

				&.is-active,
				&:hover {
					color: $color-white;
					border-color: $color-brand-2;
					background-color: $color-brand-1;
				}
			}
		}
	}
</style>
