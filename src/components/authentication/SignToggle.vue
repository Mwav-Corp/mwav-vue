<!-- 헤더 -->
<template>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary" @click="moveToSignUp">Sign In</button>
        <button type="button" class="btn btn-primary">Sign Up</button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'SignToggle',
    compnenets: {},
    data() {
        return {
        };
    },
    setup() {
        const router = useRouter();
    },
    created() { },
    mounted() { },
    unmounted() { },
    methods: {
        moveToSignUp() {
            this.$router.push({
                path: '/sign-in',
                name: 'signUp'
            });
        }
    }
}
</script>