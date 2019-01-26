import Vue from 'vue'
import topNavBar from './components/topNavBar'
import userInfo from './components/userInfo'


Vue.component('topnavbar',topNavBar)
Vue.component('userinfo',userInfo)


new Vue({
    el:"#app"
})