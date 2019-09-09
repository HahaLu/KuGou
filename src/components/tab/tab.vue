<template>
    <div class="content">
         <ul>
            <router-link class="link" active-class="cur" tag="li" to="/newsong">
                新歌
            </router-link>
            <router-link class="link" active-class="cur" tag="li" to="/rank">
               排行
            </router-link>
            <router-link class="link" active-class="cur" tag="li" to="/songmenu">
                歌单
            </router-link>
            <router-link class="link" active-class="cur" tag="li" to="/singer">
                歌手
            </router-link>
            
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

     .content
            width: 100%
            height .58rem
            box-shadow 0 .03rem .03rem 0 #f4f4f4
            ul
                width 100% 
                padding 0 .13rem
                height .54rem
                line-height .54rem
                box-sizing border-box
                font-size .2rem
                li.cur
                    border-bottom .04rem solid #33a3f5
                .link
                    width 23.5%
                    display inline-block
                    text-align center
                   
</style>