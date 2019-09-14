
import jsonp from 'assets/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getNewSong(){

    // 轮播图
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({},commonParams,{
       platform:'h5',
       uin:0,
       needNewCode:1 
    })
    return jsonp(url,data,options)
}

export function getDiscList() {
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({}, commonParams, {
      platform: 'yqq.json',
      hostUin:0,
      needNewCode: 0
    })
    return jsonp(url,data,options)
    }
    
    


