<template>
	<div id="app" v-cloak>
		<page-header></page-header>

		<page-title></page-title>

		<router-view/>
	</div>
</template>


<script>
  import PageHeader from './components/PageHeader.vue'
  import PageTitle from './components/PageTitle.vue'
  
  export default {
    components: {
      PageHeader,
      PageTitle,
    }
  };
</script>


<style lang="scss">
	:root {
		--color-brand-1: #42b883;
		--color-brand-2: #35495e;
		--color-gray: #3f3f3f;
		--color-light: #fafafa;
		--color-silver: #ececec;
	}

	[v-cloak] {
		display: none;
	}

	*,
	*:after,
	*:before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  body {
    padding-top: 6rem;
    -webkit-font-smoothing: antialiased;
		font-family: "Oxygen", Helvetica, sans-serif;
		font-size: 62.5%;
    color: var(--color-gray-1);
  }

  a {
		text-decoration: none;
	}
</style>
