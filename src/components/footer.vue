<template>
  <footer class="ant-layout-footer sc-egiyK lptEOs">
    <div class="sc-bqiRlB dtqLno">
      <div class="col">
        <ul class="sc-fotOHu sc-fFeiMQ hAjKbL cFjHxO icon-nav social">
          <li><a href="https://twitter.com/gidao_official" target="_blank" class="link twitter"></a></li>
          <li><a href="https://discord.gg/RxKqBeut7U" target="_blank" class="link discord"></a></li>
          <li><a href="https://t.me/+tVQOsxdYyvtlNDg1" target="_blank" class="link telegram"></a></li>
          <li><a href="https://www.instagram.com/gidao_official/" target="_blank" class="link instagram"></a></li>
          <li><a href="https://www.tiktok.com/@gidao_official" target="_blank" class="link tiktok"></a></li>
        </ul>
      </div>
      <div class="col">
        <ul class="sc-fotOHu sc-fFeiMQ hAjKbL cFjHxO">
          <li><a href="javascript:;">Influencers? Join GI DAO</a></li>
          <li>
            <div class="divider"></div>
          </li>
          <li><a href="javascript:;">Advertising? Contact us</a></li>
        </ul>
      </div>
    </div>
    </div>
    <div class="sc-hBUSln iFQLMC">
      <div class="container"><a href="javascript:;" @click="toPage" title="gidao">
        <div class="sc-bkkeKt jRhfVB"><img src="@/assets/img/gidao-logo.png" alt="GI DAO">DAO
        </div>
      </a><span class="copyright">Copyright © 2022 GI DAO. All rights reserved</span></div>
    </div>
  </footer>
</template>
<script>
export default {
  name: '',
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {
  },
  methods: {
    toPage() {
      this.$router.push({name: 'Home'})
    },
  }
}
</script>
<style scoped lang="scss"></style>
