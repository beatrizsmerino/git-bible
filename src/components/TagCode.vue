<template>
	<div>
		<code class="tag-code">{{code}}</code>
	</div>
</template>



<script>
	export default {
		name: 'TagCode',
		props: {
			code: String,
		},
	};
</script>



<style lang="scss" scoped>
	.tag-code{
		width: 100%;
		padding: 1rem;
		display: inline-block;
		color: $color-brand-3;
		background-color: $color-white;
	}
</style>