<template>
      <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
        <button @click="searchUsers">Search</button>
      </div>
    </section>
</template>

<script>
import pubsub from 'pubsub-js'
import axios from 'axios'
export default {
name:"Search",
data(){
  return{
    keyWord:''
  }
},
methods:{
searchUsers(){
pubsub.publish('updateList',{isfirst:false,isloading:true,msgerr:'',users:[]})
  axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    response=>{
console.log('接收成功',response.data.items);
pubsub.publish('updateList',{isloading:false,msgerr:'',users:response.data.items})

    },
    error=>{
pubsub.publish('updateList',{isloading:false,msgerr:error.message,users:[]})
    }
  )
}
}
}
</script>
