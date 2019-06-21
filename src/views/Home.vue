<template>
  <div class="page-content page-home">
    <img alt="Vue logo" src="../assets/logo-vue.png">
  </div>
</template>


<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'home',
  components: {
    Search
  }
}
</script>


<style lang="scss" scoped>
  .page-content{
    text-align: center;
  }
</style>

