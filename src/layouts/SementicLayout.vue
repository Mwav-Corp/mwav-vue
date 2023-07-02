<template>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
</template>

<script>
import Header from '@/components/sementic/Header.vue';
import Footer from '@/components/sementic/Footer.vue';
export default {
    name: 'App',
    // required to use nested components
    components: {
        Header,
        Footer
    }
}

</script>