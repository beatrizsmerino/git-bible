<template>
	<ul class="list-commands">
		<li v-for="command in commands" :key="command.id" :ref="command.name" :id="command.name" class="command" :data-index="command.id">
			<h3 class="command__title">
				{{command.title}}
			</h3>
			<div class="command__description">
				<p>
					{{command.description}}
				</p>
			</div>
			<code-theme class="command__code" :code="command.code"/>
		</li>
	</ul>
</template>



<script>
	import CodeTheme from "@/components/CodeTheme.vue";
	import dataCommandsGit from "../data/data-commands-git.json";

	export default {
		name: 'ListCommandsGit',
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
			this.commands = dataCommandsGit;
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

		&__title{
			margin-bottom: 0.5rem;
			color: $color-brand-2;
		}

		&__description {
			margin-bottom: 2rem;
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