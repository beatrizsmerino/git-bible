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
		// COLOR
		--color-flamingo: #F05133;
		--color-totem-pole: #9D0A0E;
		--color-milano-red: #BD2C00;
		--color-tia-maria: #C9510C;
		--color-cinnabar: #E24329;
		--color-orange: #FC6D26;
		--color-sea-buckthorn: #FCA326;
		--color-cola: #413000;
		// BRAND
		--color-brand-1: var(--color-flamingo);
		--color-brand-2: var(--color-cola);
		// GRAY SCALE
		--color-gray: #3f3f3f;
		--color-light: #fafafa;
		--color-silver: #ececec;
		--color-white: #ffffff;
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
