<template>
 <div class="bscroll" ref="bscroll">
     <div>
        <div class="bd rank-list">
            <ul class="panel-img-list">
                <li 
                v-for="item in rankList"
                :key="item.id"
                >
                    <a href="#">
                        <div class="panel-img-left">
                            <img :src="item.picUrl" alt="" loading="1" class="">
                        </div>
                        <div class="panel-img-content">
                            <p>{{item.topTitle}}</p>
                        </div>
                        <div class="panel-img-right">
                            <i class="panel-img-arrow"></i>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
     </div>
    </div>
</template>
<script>
import {getSongMenu} from "api/songmenu"
import { ERR_OK } from "api/config"
import BScroll from 'better-scroll'
export default { 
      created () {
            this._getSongMenu()
        },
        data () {
        
            return {
                rankList:[]
            }
        },
        methods: {
            _getSongMenu(){
                getSongMenu().then((res)=>{
                    if(res.code === ERR_OK){
                        console.log(res.data.topList)
                        this.rankList = res.data.topList
                    }
                })
            },
         
        },
        mounted () {
              
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
        
        
    
}
</script>
<style lang="stylus" scoped>
.bscroll
    width 100%
    height 6rem
    overflow hidden
    .rank-list 
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
                    line-height .96rem
                    margin-left 1rem
                    display block
                    color #333
                    font-size .2rem
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