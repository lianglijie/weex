<template lang="">
  <div class="login">
    <div class="login-user">
      <image :src="get_img_path('user.jpeg')" class="user-img"></image>
       <!-- <image :src="user" class="user-img"></image> -->
    </div>
    <div class="mes">
      <div class="mes-li">
        <input type="text" class="tel" placeholder="请输入手机号码">
      </div>
      <div class="mes-li">
        <input type="password" class="pwd" placeholder="密码">
      </div>
    </div>
    <!-- <input type="button" value="登陆"> -->
    <div class="login-button">
      <text class="login-btn">登录</text>
    </div>
    <div  class="other">
      <text class="register">立即注册</text>
      <text class="for-pwd">忘记密码</text>
    </div>
   <div class="other-head">
    <div class="o-left"></div>
    <text class="o-title" >快速登录</text>
    <div class="o-right"></div>
   </div>
    
    <div class="login-icon">
      <div class="qq"></div>
      <div class="weix"></div>
      <div class="weib"></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
         user: 'https://weex.apache.org/assets/img/github.7cb484a9.svg',
      }
    },
    methods:{
      	get_img_path(img_name){
          // debugger
          this.test =" weex.config"
          console.log(window.location.host)
          // document.createElement("h3") 
          // alert(window.location)
          console.log(WXEnvironment)
          let platform = weex.config.env.platform
          let img_path = ''

          if (platform == 'Web') {
            // img_path = `http://10.98.14.165:8082/src/img/${img_name}`
            img_path = 'http://'+window.location.host+'/src/img/'+img_name
          } else if (platform == 'android') {
            // android 不需要后缀
            img_name = img_name.substr(0, img_name.lastIndexOf('.'));
            img_path = `local:///${img_name}`
          } else {
            img_path = `../img/${img_name}`
          }

          return img_path
        }
    }
  }
</script>
<style scoped>
  /* body{
    background-color: #f3f3f3
  } */
  .login{
    padding:30px
  }
  .login-user{
    margin: 150px auto 50px auto;
  }
  .user-img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }
  .mes{
    border-radius: 10px;
    border-width: 1px;
    border-color: #ddd;
    width: 600px;
    margin: 50px auto ;
  }
  .tel,.pwd{
    box-sizing: border-box;
    padding: 15px 15px 15px 70px;
    height: 100px; 
    outline: none;
    overflow: hidden;
    background-repeat: no-repeat;
  }
  .tel{
		background-image: url("/src/img/login.png");
    background-size: 30px 30px;
    background-position: 20px 35px;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
	}
  .pwd{
    background-image: url("/src/img/pwd.png");
    background-size: 30px 30px;
    background-position: 20px 35px;
  }
  .login-btn{
    background-color: #4e70ee;
    width: 600px;
    height: 100px;
    border-radius: 10px;
    color: #fff;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .other{
    width: 600px;
    margin: 30px auto;
    flex-direction: row;
  }
  .register,.for-pwd{
    color: #ccc;
    flex: 1;
    font-size: 24px;
  }
  .for-pwd{
    text-align: right
  }
  .other-head{
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 600px;
    margin: 150px auto 80px auto;
  }
  .o-title{
    width: 600px;
    text-align: center;
    color: #ccc;
    /* background-color: #fff; */
  }
  .o-left,.o-right{
    position: absolute;
    top: 26px;
    width: 210px;
    background-color: #ccc;
    height: 1px;
    margin: 0 auto;
    transform: scale(1,0.5)
  }
  .o-left{
    left: 0;
  }
  .o-right{
    right: 0;
  }
  .login-icon{
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .qq,.weix,.weib{
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center center;
    /* flex: 1; */
    border-radius: 100%;
    border-width: 2px;
    border-color: #ccc;
    height: 100px;
    width: 100px;
    margin: 0 20px;
  }
  .qq{
    background-image: url("/src/img/qq.svg");
  }
  .weix{
    background-image: url("/src/img/weix.png");
  }
  .weib{
    background-image: url("/src/img/weib.png");
  }
</style>