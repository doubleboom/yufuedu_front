<template>
 <div>
   home
   <a href="http://127.0.0.1:7001/passport/github"></a>
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
import scrollAnimate from '@/directive/scrollAnimate'

export default {
  data() {
    return {}
  },
  components: {},
  directives:{
    scrollAnimate
  },
  created: function () {},
  mounted: function () {},
  watch:{
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh' : 'en';
    }
  }
}
</script>

<style scoped lang='scss'>
$color: blue;
div {
  color: $color;
  text-align: center;
  button{
    margin-left: 15px;
  }
  img{
    // opacity: 0;
  }
}
</style>
