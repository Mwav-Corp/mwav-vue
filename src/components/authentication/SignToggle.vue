<!-- 헤더 -->
<template>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary">Sign In</button>
        <button type="button" class="btn btn-primary" @click="moveToSignUpForm">Sign Up</button>
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
        moveToSignUpForm() {
            this.$router.push({
                path: '/sign-up',
                name: 'signUp'
            });
        }
    }
}
</script>