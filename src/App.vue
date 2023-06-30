<!-- 통합 컴포넌트 -->
<template>
    <Header></Header>
    <RouterView />
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