<template>
  <div class="page-content page-home">
    <div class="page-content__inner">
      <div class="logo">
        <span class="logo__icon icon icon-git"></span>
        <div class="logo__text">
          <span class="logo__git">git</span>
          <span class="logo__bible">Bible</span>
        </div>
      </div>

      <search></search>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";

export default {
  name: "home",
  components: {
    Search
  }
};
</script>


<style lang="scss" scoped>
.page-content {
  height: calc(100vh - 6rem);
  position: relative;
  text-align: center;

  &__inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Adelle Bold", "Georgia", "Times New Roman", serif;
  font-size: 8rem;

  &__icon {
    color: $color-brand-1;
  }

  &__text {
    margin-left: 1rem;
    display: flex;
  }

  &__git {
    color: $color-brand-2;
  }
  &__bible {
    color: $color-brand-2-light;
  }
}
</style>