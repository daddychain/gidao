<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {connectNetwork} from "@/utils/getWeb3"

export default {
  data () {
    return {}
  },
  beforeCreate() {
    this.$store.dispatch('registerWeb3')
  }
}
</script>
<style lang="scss">
.el-message {
  padding: 8px 16px;
  min-width: 150px;
  box-shadow: 0 2px 6px rgba(0,0,0,.2);
  pointer-events: all;
  border-radius: 4px;
  background-color: #fff;
  border-color: #fff;
  .el-icon-warning {
    color: #f90;
  }
  .el-icon-success {
    color: #19be6b;
  }
  .el-message__content {
    color: #515a6e;
  }
}
</style>
