<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {connectNetwork} from "@/utils/getWeb3"

export default {
  data () {
    return {
      _interval: null
    }
  },
  beforeCreate() {
    const _this =this
    _this.$store.dispatch('registerWeb3')
    _this.$store.dispatch('getPrice')
    _this._interval = setInterval(()=> {
      _this.$store.dispatch('getPrice')
    },8000)
  }
}
</script>
<style lang="scss">

</style>
