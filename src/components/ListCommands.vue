<template>
	<ul class="list-commands">
		<li
			class="list-commands__item"
			v-for="(command, index) in commandsFormatted"
			:key="`command-${index}`"
			:ref="command.name"
		>
			<Command
				:command-data="command"
				:command-index="index"
				:command-status="(command.name === anchorName) ? true : false"
				@emit-click="scrollAnchor($refs[anchorName])"
			/>
		</li>
	</ul>
</template>



<script>
	import Command from "@/components/Command";

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
				commandsFormatted: '',
				anchorName: this.$route.hash.split('#').pop(),
				formatScreen: 'desktop',
				sizesHeight: {
					desktop: [
						{
							name: 'header',
							size: 80
						},
						{
							name: 'title',
							size: 55
						},
						{
							name: 'margin',
							size: 30
						}
					],
					mobile: [
						{
							name: 'header',
							size: 60
						},
						{
							name: 'title',
							size: 45
						},
						{
							name: 'margin',
							size: 30
						}
					]
				}
			};
		},
		methods: {
			getDistanceScrollAnchor(sizes) {
				let sumValues = sizes.reduce((prevent, current) => prevent + current.size, 0);
				return sumValues;
			},
			scrollAnchor($thisAnchor) {
				setTimeout(() => {
					if ($thisAnchor !== undefined) {
						let $thisAnchorTop = $thisAnchor[0].offsetTop;

						window.scrollTo({
							left: 0,
							top: $thisAnchorTop - this.getDistanceScrollAnchor(this.sizesHeight[this.formatScreen]),
							behavior: 'smooth',
						});
					}
				}, 100);
			},
			handleResize() {
				const maxWidth = 576;
				if (window.outerWidth <= maxWidth) {
					this.formatScreen = 'mobile';
				} else {
					this.formatScreen = 'desktop';
				}
			}
		},
		watch: {
			$route(to) {
				this.handleResize();
				this.anchorName = to.hash.split('#').pop();
				if (this.anchorName) {
					this.scrollAnchor(this.$refs[this.anchorName]);
				}
			}
		},
		mounted() {
			if (this.anchorName) {
				this.scrollAnchor(this.$refs[this.anchorName]);
			}
			this.handleResize();
		},
		created() {
			this.commandsFormatted = this.commands.filter(command => command.name !== "" && command.title !== "" && command.code !== "");
			window.addEventListener('resize', this.handleResize);
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize);
		}
	};
</script>


<style lang="scss" scoped>
	.list-commands {
		list-style: none;

		&__item {
			&:not(:last-child) {
				margin-bottom: 3rem;
			}
		}
	}
</style>