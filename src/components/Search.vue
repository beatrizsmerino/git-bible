<template>
    <div class="search">
        <form class="form" method="" action="">
            <div class="form__field">
                <input class="form__input" type="text" placeholder="Search command"/>
                <span class="form__icon icon icon-search"></span>
            </div>
        </form>
    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>
.form {
    max-width: 800px;
    margin: 2rem auto 0;

    &__field{
        position: relative;
    }

    &__icon{
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 3rem;
        color: $color-brand-1;
    }

    &__input{
        width: 100%;
        padding: 1.2rem 2rem;
        font-size: 3rem;
        color: $color-brand-2;
        border: 0.2rem solid $color-brand-1;
    }
}
</style>
