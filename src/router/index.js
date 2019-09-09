import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import NewSong from 'components/newsong/newsong'
import Rank from 'components/rank/rank'
import SongMenu from 'components/songmenu/songmenu'
import Singer from 'components/singer/singer'

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/newsong'     
    },
    {
      path:'/newsong',
      name:"newsong",
      component:NewSong
    },
    {
      path:'/rank',
      name:'rank',
      component:Rank
    },
    {
      path:'/songmenu',
      name:'songmenu',
      component:SongMenu
    },
    {
      path:'/singer',
      naem:'singer',
      component:Singer
    }
  ]
})
export default router