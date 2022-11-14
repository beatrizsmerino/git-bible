<template>
	<ul class="tag-list">
		<li
			v-for="(item, index) in tagList"
			:key="index"
			class="tag-list__item"
			:class="{
				'tag-list__item--filter': tagListType === 'filter',
				'is-active': tagListActive.includes(item)
			}"
			@click="activeTag(item)"
		>
			<span>
				{{ item }}
			</span>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'TagList',
		props: {
			tagList: {
				type: Array,
				required: true
			},
			tagListType: {
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
				if (this.tagListType === 'filter') {
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
	.tag-list {
		margin-left: -0.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		list-style: none;

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
