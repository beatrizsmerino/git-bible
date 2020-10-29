<template>
	<ul class="list-commands">
		<li class="list-commands__item" v-for="(command, index) in commands" :key="`command-${index}`" :ref="command.name" >
			<command v-if="!!command.code && !!command.name" :dataCommand="command" :id="command.name" :data-index="index" :class="{'is-selected': command.name === anchorName}"/>
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
				anchorName: this.$route.hash.split('#').pop()
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
					}
				}, 100);
			}
		},
		mounted(){
			if(this.anchorName){
				this.scrollAnchor(this.$refs[this.anchorName]);
			}
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