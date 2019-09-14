<template>
    <div class="bd page-plist-index">
    <!-- start 歌单列表 -->
    <ul class="panel-img-list" id="panelList">
      <li 
      v-for="item in songMenuList"
      :key="item.id"
      >
        <a href="#">
          <div class="panel-img-left">
            <img :src="item.picUrl"/>
          </div>
          <div class="panel-img-content">
            <p class="panel-img-content-first">{{item.songList[0].singername}}</p>
            <p class="panel-img-content-sub">
              <i class="icon-music"></i>400775949
            </p>
          </div>
          <div class="panel-img-right">
            <i class="panel-img-arrow"></i>
          </div>
        </a>
      </li>
    </ul>

    <!-- end 歌单列表 -->
   
  </div>
</template>
<script>
 import {getSongMenu} from 'api/songmenu'
 import {ERR_OK} from 'api/config'
  
export default {
    created () {
      this._getSongMenu()
    },
    data () {
      return {
        songMenuList:[]
      }
    },
    methods: {
       _getSongMenu(){
          getSongMenu().then((res)=>{
            if(res.code === ERR_OK){
              console.log(res.data.topList)
              this.songMenuList = res.data.topList
            }
          })
    }
    },
   
}
</script>
<style lang="stylus" scoped>
   .page-plist-index
        width 100%
        padding-top .15rem
        .panel-img-list
            width 100%
            background #ffffff
            height 10rem
            a
                display block
                width 100%
                position relative
                padding .12rem .38rem .12rem .15rem
                margin-left .12rem
                border-bottom .01rem solid #e5e5e5
                .panel-img-left
                    width .96rem
                    height .96rem
                    display inline-block
                    position absolute
                    left 0
                    top .12rem
                    img
                        width 100%
                .panel-img-content 
                    width 2rem
                    min-height .96rem
                    margin-left 1rem
                    display block
                    color #333
                    font-size .2rem
                    .panel-img-content-first
                       padding-top .26rem
                       font-size .18rem
                    .panel-img-content-sub
                      color #9b9b9b
                      font-size .14rem
                      .icon-music 
                          width .12rem
                          height .12rem
                          margin-top .02rem
                          margin-right .05rem
                          display inline-block
                          background url(http://m.kugou.com/v3/static/images/index/icon_music.png) no-repeat;
                          background-size 100%
                .panel-img-right 
                    position absolute
                    top 0
                    right 0
                    width .14rem
                    height 100%
                    text-align center
                    display block
                    .panel-img-arrow 
                        width .1rem
                        height .18rem
                        margin-left .09rem
                        position absolute
                        top 40%
                        right .3rem
                        display block
                        background url(http://m.kugou.com/v3/static/images/index/arrow_icon.png) no-repeat;
                        background-size 100%
</style>