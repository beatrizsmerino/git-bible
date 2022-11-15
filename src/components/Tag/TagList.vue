<template>
	<ul class="tag-list">
		<li
			v-for="(item, index) in sortTagList"
			:key="index"
			class="tag-list__item"
			:class="{
				'tag-list__item--clickable': tagListType === 'clickable',
				'is-active': tagListActive.includes(item)
			}"
			@click="tagClick(item)"
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
		computed: {
			sortTagList() {
				const data = this.tagList;

				return data.sort();
			}
		},
		methods: {
			activeTag(tag) {
				if (this.tagListType === 'clickable') {
					if (this.tagListActive.includes(tag)) {
						this.tagListActive.splice(
							this.tagListActive.indexOf(tag),
							1
						);
					} else {
						this.tagListActive.push(tag);
					}
				}
			},
			tagClick(tag) {
				this.activeTag(tag);
				this.$emit('emit-click', this.tagListActive);
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

			&--clickable {
				background-color: $color-light;
				cursor: pointer;

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
