<template>
    <div class="bscroll" ref="bscroll">
            <div class="">  
                <p class="drop-down bscroll-text" v-if="dropDown">释放立即刷新...</p>
                <div class="swiper">
                    <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item
                    v-for="item in newsongs"
                    :key="item.id"
                    >
                    <a :href="item.linkUrl">
                        <img :src="item.picUrl" alt="">
                    </a>
                    </van-swipe-item>
                    </van-swipe>
                </div>  
                <ul class="pannel-songslist">
                    <li class="pannel-songslist-item" 
                    v-for="item in discList"
                    :key="item.id"
                    >
                        <div class="pannel-songslist-name">
                            <span v-html="item.k"></span>
                        </div>
                        <div class="pannel-songslist-item-download">
                            <em>
                                <i></i>
                            </em>
                        </div>
                    </li>
                </ul>
                <p class="x bscroll-text">加载更多...</p>  
            </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe,SwipeItem} from 'vant'
import 'vant/lib/index.css'
Vue.use(Swipe).use(SwipeItem)
 import BScroll from 'better-scroll'


// 获取数据

import {getNewSong,getDiscList} from 'api/newsong'
import {ERR_OK} from 'api/config'
export default {
    // 数据源
        data(){
            return {
                newsongs:[],
                discList:[],
                dropDown:false
                
            }
        },
  
        created () {
            this._getNewSong(),
           this._getDiscList()
        },
        mounted () {
            this.scrollFn()
        },
        methods: {
            _getNewSong(){
                getNewSong().then((res)=>{
                    if(res.code === ERR_OK){
                        console.log(res.data.slider)
                       this.newsongs = res.data.slider
                    }
                })
            },
            _getDiscList(){
               getDiscList().then((res)=>{
                    if(res.code === ERR_OK){
                        console.log(res.data.hotkey)
                       this.discList = res.data.hotkey
                    }
                })
            },
             scrollFn(){
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.bscroll, {
                            click: true,
                            scrollY: true,
                            probeType: 3,
                            mouseWheel:true
                        });
                    }else{
                        this.scroll.refresh();
                    }
                    this.scroll.on('scroll', (pos) => {
                        // console.log(pos.y,this.dropDown)
                        //如果下拉超过50px 就显示下拉刷新的文字
                        if(pos.y>50){
                            this.dropDown = true
                        }else{
                            this.dropDown = false
                        }
                    })
                    //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
                    this.scroll.on('touchEnd', (pos) => {
                        // 下拉动作
                        if(pos.y > 50){
                            console.log("下拉刷新成功")
                            this.dropDown = false
                        }
                        //上拉加载 总高度>下拉的高度+10 触发加载更多
                        if(this.scroll.maxScrollY>pos.y+10){
                            console.log("加载更多")
                            //使用refresh 方法 来更新scroll  解决无法滚动的问题
                            this.scroll.refresh()
                        }
                        // console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
                    })
                    console.log(this.scroll.maxScrollY)
                });
        }
        },
        mounted () {
            
        },
        components: {
        }
    
}
</script>
<style lang="stylus" scoped>
        .bscroll-text
            text-align center
            margin-top .15rem
            margin-bottom .1rem
        .bscroll
              width 100%
              height 5.42rem
              overflow hidden

            .swiper
                width 100%
                height max-content
                overflow hidden
                img
                    width 100%
                    height 100%
                    padding-top .1rem
            .pannel-songslist
                width 100%
                padding-left .13rem
                // height max-content

                .pannel-songslist-item
                    width 100%
                    height .97rem
                    border-bottom 1px solid #e5e5e5
                    position relative
                    display table
                    .pannel-songslist-name 
                        width 100%
                        padding-right .48rem
                        display table-cell
                        padding-left .06rem
                        cursor pointers
                        font-size .18rem
                        box-sizing border-box
                        vertical-align middle
                    .pannel-songslist-item-download
                        position absolute
                        top 0
                        right 0
                        width .45rem
                        height .97
                        cursor pointer
                        text-align center
                        i 
                            width: .18rem
                            height .19rem
                            margin-top .27rem
                            display inline-block
                            background url(http://m.kugou.com/v3/static/images/index/download_icon_2.png) no-repeat
                            background-size 100%


               
                   


        

</style>