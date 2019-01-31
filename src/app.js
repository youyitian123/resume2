import Vue from 'vue'
import topNavBar from './components/topNavBar'
import userInfo from './components/userInfo'
import Footer from './components/footer'
import ProjectList from './components/projectList'
import Introduction from  './components/Introduction'

Vue.component('topnavbar',topNavBar)
Vue.component('userinfo',userInfo)
Vue.component('my-footer',Footer)
Vue.component('project-list',ProjectList)
Vue.component('introduction',Introduction)





new Vue({
    el:"#app"
})