<template>
    <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
           <img src="http://m.kugou.com/v3/static/images/index/banner.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item> 
            <img src="http://imge.kugou.com/mobilebanner/20190731/20190731234643631589.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://imge.kugou.com/mobilebanner/20190731/20190731234809940554.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://imge.kugou.com/mobilebanner/20190731/20190731234822280903.jpg" alt="">
        </van-swipe-item>
         <van-swipe-item>
            <img src="http://imge.kugou.com/mobilebanner/20190731/20190731234904119937.jpg" alt="">
        </van-swipe-item>
        </van-swipe>   
    </div>
</template>

<script>
import Vue from 'vue'
import { Swipe,SwipeItem} from 'vant'
import 'vant/lib/index.css'
Vue.use(Swipe).use(SwipeItem)
export default {
    components: {
        
    }
}
</script>
<style lang="stylus" scoped>
    .swiper
        width 100%
        height max-content
        overflow hidden
        img
            width 100%
            height 100%
            padding-top .1rem
        

</style>