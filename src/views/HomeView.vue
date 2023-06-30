<template>
    <Welcome></Welcome>
    <Services></Services>
</template>

<script>
import Welcome from '@/components/contents/Welcome.vue';
import Services from '@/components/contents/Services.vue';

export default {
    name: 'HomeView',
    components: {
        Welcome, Services
    }
}
</script>
