<template>
	<div class="page-content">
		<div class="page-content__inner">
			<Logo theme="logo--home" />
			<Search />
		</div>
	</div>
</template>

<script>

// @ is an alias to /src
	import Logo from '@/components/Logo';
	import Search from '@/components/Search';

	export default {
		name: 'Home',
		components: {
			Logo,
			Search
		},
		mounted() {
			document.querySelector('.page-header').style.boxShadow = 'none';
		}
	};
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @include media("md", $dimension: "height") {
    height: auto;
    margin: 6rem auto;
  }

  @include media("md") {
    height: auto;
    margin: 6rem auto;
  }

  &__inner {
    width: 100%;
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include media("md") {
      width: 90%;
      max-width: 100%;
    }
  }
}
</style>
