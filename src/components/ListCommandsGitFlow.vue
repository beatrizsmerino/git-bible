<template>
	<ul class="list-commands">
		<li v-for="command in commands" :key="command.id" :ref="command.name" :id="command.name" class="command" :data-index="command.id">
			<p class="command__description">
				{{command.description}}
			</p>
			<code-theme class="command__code" :code="command.code"/>
		</li>
	</ul>
</template>



<script>
	import CodeTheme from "@/components/CodeTheme.vue";
	import dataCommandsGitFlow from "../data/data-commands-git-flow.json";

	export default {
		name: 'ListCommandsGitFlow',
		components: {
			CodeTheme
		},
		data() {
			return {
				anchorName: this.$route.hash.split('#').pop(),
				commands: []
			};
		},
		methods: {
			scrollAnchor: function($thisAnchor) {
				setTimeout(() => {
					if($thisAnchor !== undefined){
						let $thisAnchorTop = $thisAnchor[0].offsetTop;
						window.scrollTo({
							left: 0,
							top: $thisAnchorTop - 90 - 70,
							behavior: 'smooth',
						});
						$thisAnchor[0].classList.add("is-selected");
					}
				}, 100);
			}
		},
		created() {
			this.commands = dataCommandsGitFlow;
		},
		mounted(){
			this.scrollAnchor(this.$refs[this.anchorName]);
		},
	};
</script>



<style lang="scss" scoped>
	.list-commands {
		list-style: none;
	}

	.command {
		padding: 1.92rem 3.2rem;
		font-size: 1.92rem;
		background-color: $color-light;
		border-bottom: 0.8rem solid $color-silver;

		&:not(:last-child) {
			margin-bottom: 1.6rem;
		}

		&__description {
			color: $color-brand-2;
		}

		&__code {
			width: 100%;
			display: inline-block;
		}

		&.is-selected{
			background-color: $color-silver;
		}
	}
</style>