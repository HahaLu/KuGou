<template>
  <div id="app">
  
    <MHeader></MHeader>
    <tab></tab>
  <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/mheader/mheader'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
 </script>
 <style lang="stylus" scoped>
 
 </style>





