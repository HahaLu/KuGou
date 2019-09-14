<template>
    <div class="index-container">
        <header>
           <h1 class="logo">
               <a href="" class="logoLink" title="酷狗音乐"></a>
           </h1>
           <div class="downloadKG">
               <span>下载酷狗</span>
           </div>
           <a href="#" class="btn-search" id="btnSearch"></a>
       </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.index-container
    position relative
    width 100%
    height 100%
    header
        height .58rem
        background #2ca2f9
        .logo
            display inline-block
            .logoLink
                    display inline-block
                    width 1.31rem
                    height  .3rem
                    margin-left .13rem
                    margin-top .14rem
                    background url(http://m.kugou.com/v3/static/images/index/logo.png) no-repeat
                    background-size 100%
        .downloadKG
            display inline-block
            width 1.17rem
            height .33rem
            text-align center
            margin-left .13rem
            position relative
            top -.1rem
            >span
                display inline-block
                width 1.02rem
                height .3rem
                line-height .3rem
                color #fff
                border-radius: .07rem
                border .01rem solid #fff
        .btn-search
            display inline-block
            width .21rem
            height .21rem
            background url(http://m.kugou.com/v3/static/images/index/search.png) no-repeat
            background-size 100%
            position absolute
            top .18rem
            right .12rem
</style>