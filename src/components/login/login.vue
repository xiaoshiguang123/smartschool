<template>
<div class="am-g myapp-login">
	<div class="myapp-login-logo-block">
		<div class="myapp-login-logo">
			<img class="myapp-login-logo-image" src="../../assets/images/logo.png">
		</div>
		<div class="myapp-login-logo-text">
			<div class="myapp-login-logo-text">
				<!-- Js<span>Fiddle</span> -->
				<div class="info">上大学,一个APP就够了</div>
			</div>
		</div>

		<div class="login-font">
			<router-link to="/login" class="active">登录</router-link> or <router-link to="/register">注册</router-link>
		</div>
		<div class="am-u-sm-10 login-am-center">
			<form class="am-form">
				<fieldset>
					<div class="am-form-group">
						<input type="text" class="" placeholder="输入账号" v-model="userLogin.uid" @blur="checkUid">
					</div>

					<div class="am-form-group">
						<input type="password" class="" placeholder="密码" v-model="userLogin.upsd" @blur="checkPwd">
					</div>
          <mt-cell title="自动登录">
          <mt-switch v-model="userLogin.autoLogin" name="自动登录"></mt-switch>
					</mt-cell>
					<button class="am-btn am-btn-default" @click.prevent="_submitLogin">登录</button>
				</fieldset>
			</form>
		</div>
	</div>
</div>

</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
      userLogin: {
        uid: window.localStorage.getItem("uid"),
        upsd: window.localStorage.getItem("upsd"),
        autoLogin: Boolean(window.localStorage.getItem("autoLogin")) 
      },
      regUser: {
        // 用户名： 中文、英文、数字，不包括下划线等特殊符号
        uid: /[\u4E00-\u9FA5A-Za-z0-9]+$/,
        // 密码： 字母数字下划线，6-16位
        upsd: /\w{6,16}/
      },
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    // 将localStroge中的参数存入userLogin
    let userLogin = {
      uid: window.localStorage.getItem("uid"),
      upsd: window.localStorage.getItem("upsd"),
      autoLogin: Boolean(window.localStorage.getItem("autoLogin"))
    };

    // 如果存在参数，自动调用登录函数
    if (userLogin.uid  && userLogin.upsd  && userLogin.autoLogin != false) {
      this._submitLogin(userLogin);
      // console.log('调用自动登录函数')
    }
    this.$nextTick(function() {

    });
  },
  mounted() {

  },
  methods: {
    ...mapMutations(["update"]),

    // 正则检测用户名
    checkUid() {
      if (this.userLogin.uid == "") {
        this.$toast("请输入账号");
      } else if (
        this.userLogin.uid != "" &&
        !this.regUser.uid.test(this.userLogin.uid)
      ) {
        this.$toast("用户名不符合要求");
      } else {
        return true;
      }
    },
    // 正则检测密码
    checkPwd() {
      if (this.userLogin.upsd == "") {
        this.$toast("请输入密码");
      } else if (
        this.userLogin.upsd != "" &&
        !this.regUser.upsd.test(this.userLogin.upsd)
      ) {
        this.$toast("密码不符合要求");
      } else {
        return true;
      }
    },
        // 登录请求
    _submitLogin(userLogin) {
      if (
        this.checkUid() &&
        this.checkPwd()
      ) {
        this.http.post(this.ports.api.user.login,
            {           
            uid: this.userLogin.uid, 
            upsd: this.userLogin.upsd,	
            autoLogin: this.userLogin.autoLogin
            },res => {
            // console.log(res)
            if (res.data.status == '0') {
              // console.log(res)
              this.$toast(res.data.msg);
              window.localStorage.setItem("uid", this.userLogin.uid);
              window.localStorage.setItem("udept", res.data.data.udept);
              window.localStorage.setItem("isLogined",true)
              this.update({
                uid: res.data.data.uid,
                upsd: res.data.data.upsd,
                ugrade: res.data.data.ugrade.toString(),
                uimage: 'http://'+res.data.data.uimage,
                uname: res.data.data.uname,
                udept: res.data.data.udept,
                utel: res.data.data.utel,
                uemail: res.data.data.uemail,
            });
            if (this.userLogin.autoLogin ){
            // window.localStorage.setItem("uid", this.userLogin.uid);
            window.localStorage.setItem("upsd", this.userLogin.upsd);
            window.localStorage.setItem("autoLogin", this.userLogin.autoLogin);
            }
              this.$router.push("/repair");
              // console.log('登录成功')
            } else {
              this.$toast(res.data.msg);
              // console.log('登录失败')
            }
          })
      }
    }
  }
}
</script>

<style lang="css" scoped src="../../assets/normalize/normalize.css"></style>
<style lang="css" scoped src="./css/amazeui.min.css"></style>
<style lang="css" scoped src="./css/app.css"></style>
<style lang="scss" scoped>
.myapp-login-logo-block{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.app{
  width: 100%;
  height: 100%;
}
.myapp-login{
  width: 100%;
  height: 100%;
}
.login-am-center .am-form input{
  background:#fff ;
}
.myapp-login-logo-text .info{
  border: 0;
  margin-top: 50px;
}
.myapp-login{
  background-size:100% 100%;
}
.am-form-group .input{
  border-radius: 10px;
}
a:hover{
  color: #fff;
}
.myapp-login-logo{
  padding: 0;
}
.myapp-login-logo-image{
  width: 30%;
  height: 30%;
  margin-top: 30px;
}
</style>
