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
    color: #2c3e50;
  }

  a {
		text-decoration: none;
	}
</style>
