<template>
     <div class="bd rank-list">
        <ul class="panel-img-list">
            <li>
                <a href="#">
					<div class="panel-img-left">
						<img _src="http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg" src="http://imge.kugou.com/mcommon/400/20190906/20190906162520714932.jpg" _def="http://m.kugou.com/static/images/share2014/default.png" alt="" loading="1" class="">
					</div>
					<div class="panel-img-content">
						<p>酷狗飙升榜</p>
					</div>
					<div class="panel-img-right">
						<i class="panel-img-arrow"></i>
					</div>
				</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
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