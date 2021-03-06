import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    oldimg:'',
    // 用户信息相关参数
    userInformation:{
      uid: "",
      upsd: "",
      ugrade: "",
      uimage: "",
      uname: "",
      udept: "",
      utel: "",
      uemail: "",
    },
    // 故障报备相关参数
    repairInformation:{
    rid: "",
    ruid: "",
    utel: "",
    rdate: "",
    radr: "",
    rtype: "",
    rdes: "",
    wstatic: "", 
    image:"",
    wid:"",
    wdate: "",
    },
    // 二手交易相关参数
    secondInformation:{
      tid:"",
      tdes: "",
      tuid: "",
      utel: "",
      tprice: "",
      image: "",
    },
    // 失物招领相关参数
    lostInformation:{
      id:"",
      des: "",
      time: "",
      uid: "",
      lflag: "",
      lstatic: "",
      image: "",
    },
    // 考试通知相关参数
    testInformation:{
      testid:"",
      testname: "",
      testdate: "",
      testarea: "",
      image:"",
    },
    // 考试报名入口相关参数
    entranceInformation:{
      tid: "",
      tname: "",
      tcollege: "",
      turl: "",
    }
}
const mutations = {
    // 更新账号密码
    update(state, userInfo) {
      state.userInformation.uid = userInfo.uid;
      state.userInformation.uimage = userInfo.uimage;
      state.userInformation.upsd = userInfo.upsd;
      state.userInformation.uname = userInfo.uname;
      state.userInformation.udept = userInfo.udept;
      state.userInformation.utel = userInfo.utel;
      state.userInformation.uemail = userInfo.uemail;
      state.userInformation.ugrade = userInfo.ugrade;
    },
    // 更新故障信息
    updaterepair(state,Info) {
      state.repairInformation.rid = Info.rid;
      state.repairInformation.ruid = Info.ruid
      state.repairInformation.utel = Info.utel
      state.repairInformation.rdate = Info.rdate
      state.repairInformation.radr = Info.radr
      state.repairInformation.rtype = Info.rtype
      state.repairInformation.rdes = Info.rdes
      state.repairInformation.wstatic = Info.wstatic
      state.repairInformation.image = Info.image
      state.oldimg = Info.image
      state.repairInformation.wid = Info.wid
      state.repairInformation.wdate = Info.wdate
    },
    // 更新二手信息
    updatesecond(state, Info) {
      state.secondInformation.tid = Info.tid
      state.secondInformation.tdes = Info.tdes
      state.secondInformation.tuid = Info.tuid
      state.secondInformation.utel = Info.utel
      state.secondInformation.tprice = Info.tprice
      state.secondInformation.image = Info.image
      state.oldimg = Info.image
    },
    // 更新失物招领信息
  updatelost(state, Info) {
      state.lostInformation.id = Info.id
      state.lostInformation.des = Info.des 
      state.lostInformation.time = Info.time
      state.lostInformation.uid = Info.uid
      state.lostInformation.lflag = Info.lflag
      state.lostInformation.lstatic = Info.lstatic
      state.lostInformation.image = Info.image
      state.oldimg = Info.image
  },
    //更新考试通知
  updateinformation(state, Info) {
      state.testInformation.testid = Info.testid
      state.testInformation.testname = Info.testname
      state.testInformation.testdate = Info.testdate
      state.testInformation.testarea = Info.testarea
      state.testInformation.image = Info.image
      state.oldimg = Info.image
    },
      // 更新考试报名入口
  updateentrance(state, Info) {
      state.entranceInformation.tid = Info.tid
      state.entranceInformation.tname = Info.tname
      state.entranceInformation.tcollege = Info.tcollege
      state.entranceInformation.turl = Info.turl
    }
  

}

export default new Vuex.Store({
  state,
  mutations
})