<template>
 <div id="fun">
    <div class="fun">
        <div v-for="(user, i) in users" :key="`index-${i}`">
            <img :src=user.avatar alt="">
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <p>{{ user.email }}</p>
        </div>
    </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'TemplateFun',
    data() {
        return {
            users: {},
        }
    },
    mounted() {
        axios.request({
            url: 'https://reqres.in/api/users'
        }).then((request)=>{this.users = request.data.data; console.log(this.users)}).catch((error)=>{console.log(error)})
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
