<template>
    <div>
        <label for="">Email</label>
        <input v-model="email" type="text">
        <label for="">Password</label>
        <input v-model="password" type="password">
        <button @click="post">Log In</button><br>
        <div>{{ error }}</div>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";

export default {
    name: "VueCookies",
    data() {
        return {
            email: '',
            password: '',
            error: '',
            token: '',
        }
    },
    methods: {
        post: function(){
            axios.request({
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then((request)=>{
                console.log(request);
                this.token = request.data.token;
                Cookies.set('token', this.token)
            }).catch((error)=>{console.log(error); this.error = error.response.data.error})
        }
    },
}
</script>

<style lang="scss" scoped></style>