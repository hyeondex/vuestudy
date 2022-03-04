<template>
  <container>
    <div class="form-group">
      <div class="row">
        <label for="userId">아이디</label>
        <input type="text" class="form-control" id="userId" v-model="userId">
      </div>
      <div class="row">
        <label for="userPwd">아이디</label>
        <input type="text" class="form-control" id="userPwd" v-model="userPwd">
      </div>
      <div class="form-bottom">
        <button type="button" class="btn" @click="login">
          login
        </button>
      </div>
    </div>
  </container>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data(){
    return{
      //v-model로 설정한 data 불러오기
      userId:'',
      userPwd:'',
    }
  },
  methods:{
    login(){
      axios.post('/login', {
        userId: this.userId,
        userPwd : this.userPwd,
      }).then(response =>{
        console.log(response.data.token)
      }).catch(error => {
        console.error(error.response)
      })
    }
  }

}
</script>

<style scoped>

</style>