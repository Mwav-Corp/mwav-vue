<template>
    <Header></Header>
    <main>
        <slot></slot>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from '@/components/navigation/Header.vue';
import Footer from '@/components/footer/Footer.vue';
export default {
    name: 'App',
    // required to use nested components
    components: {
        Header,
        Footer
    }
}

</script>