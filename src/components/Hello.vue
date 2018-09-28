<template>
 <div>
   hello
      <input type='file' multiple="multiple" @change="getFormdata($event)"></input>
      <button @click="upload">上传文件</button>
         <form id='signin_form' class='form-horizontal' action='/api/login' method='post'>
      <div class='control-group'>
        <label class='control-label' for='username'>用户名</label>

        <div class='controls'>
          <input class='input-xlarge' id='username' name='username' size='30' type='text'/>
        </div>
      </div>
      <div class='control-group'>
        <label class='control-label' for='password'>密码</label>

        <div class='controls'>
          <input class='input-xlarge' id='password' name='password' size='30' type='password'/>
        </div>
      </div>

      <div class='form-actions'>
        <input type='submit' class='span-primary' value='登录'/>
      </div>
    </form>
   <a href="http://127.0.0.1:7001/passport/github">GitHub</a>
   <button @click="login">登录</button>
   <button @click="registry">注册</button>
   <button @click="alluser">获取全部用户</button>
    <p>{{$t("route.home")}}</p> 
    <button @click='changeLang'>change language</button>  
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <img v-scroll-animate src="../assets/logo.png" />
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <p>{{$t("route.home")}}</p> 
    <img v-scroll-animate src="../assets/logo.png" />
 </div>
</template>

<script>
import scrollAnimate from "@/directive/scrollAnimate";
import { loginByUsername, registry, alluser,upload } from "../api/login";
export default {
  data() {
    return {
      formdata:{}
    };
  },
  components: {},
  directives: {
    scrollAnimate
  },
  created: function() {},
  mounted: function() {},
  watch: {},
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "zh" : "en";
    },
    login() {
      loginByUsername("test123", "test123").then(res => console.log(res));
    },
    registry() {
      registry("test123", "test123").then(res => console.log(res));
    },
    alluser() {
      alluser().then(res => console.log(res));
    },
    getFormdata($event){
      console.log($event.target.files);
      let formdata=new FormData()
      for(let i in $event.target.files)
        formdata.append("file"+i,$event.target.files[i])
      console.log(formdata)
      this.formdata=formdata;
    },
    upload(){
      upload(this.formdata).then((res)=>console.log(res))
    }
  }
};
</script>

<style scoped lang='scss'>
$color: blue;
div {
  color: $color;
  text-align: center;
  button {
    margin-left: 15px;
  }
  img {
    // opacity: 0;
  }
}
</style>
