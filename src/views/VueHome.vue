<template>
    <div>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/Other">Go to Other</router-link>
        <h1>Home</h1>
        <Home />
    </div>
</template>

<script>
import Home from '../components/TemplateFun'
export default {
    name: 'VueHome',
    components: {
        Home
    },
}
</script>