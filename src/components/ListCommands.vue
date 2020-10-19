<template>
	<ul class="list-commands">
		<li class="list-commands__item" v-for="command in commands" :key="command.id" :ref="command.name" :id="command.name" :data-index="command.id">
			<command :dataCommand="command"/>
		</li>
	</ul>
</template>



<script>
	import Command from "@/components/Command.vue";

	export default {
		name: 'ListCommands',
		components: {
			Command
		},
		props: {
			commands: Array,
		},
		data() {
			return {
				anchorName: this.$route.hash.split('#').pop(),
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
		mounted(){
			this.scrollAnchor(this.$refs[this.anchorName]);
		},
	};
</script>


<style lang="scss" scoped>
	.list-commands {
		list-style: none;

		&__item{
			&:not(:last-child){
				margin-bottom: 3rem;
			}
		}
	}
</style>