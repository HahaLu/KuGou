<template>
   <div class="bd">
        <ul>
            <li class="singer-class-list">
                <a href="#">
                     <span> 热门歌手</span>
                    <i class="singer-list-arrow"></i>
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="stylus" scoped>
    .bd
        width 100%
        .singer-class-list 
            margin .16rem .13rem .2rem .13rem
            background #fbfbfb
            border .01rem solid #e4e4e4
            border-radius .05rem
            a
                display block
                font-size .18rem
                color #333
                padding .15rem
                position relative
                .singer-list-arrow 
                    width .1rem
                    height .18rem
                    position absolute
                    top .15rem
                    right 5%
                    background url(http://m.kugou.com/v3/static/images/index/arrow_icon.png) no-repeat
                    background-size 100%
                    display inline-block
                    


</style>
