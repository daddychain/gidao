<template>
  <div>
    <header class="ant-layout-header sc-gKclnd hcCMma">
      <div class="sc-dkPtRN sc-iCfMLu ehgiey dzRVvA">
        <a href="/" title="gidao">
          <div class="logo">
            <img src="@/assets/img/gidao-logo.png" alt="gidao"> <span class="logo-text">DAO</span>
          </div>
        </a>
        <ul class="sc-pVTFL jOGXSU">
          <li class="menu-li"><a href="javascript:;" @click="scrollToPosition('dao')">GI DAO</a></li>
          <li class="menu-li"><a href="javascript:;" @click="scrollToPosition('club')">Vision</a></li>
          <li class="menu-li"><a href="javascript:;" @click="scrollToPosition('nft')">NFT</a></li>
          <li class="menu-li"><a href="javascript:;" @click="scrollToPosition('roadmap')">Roadmap</a></li>
          <li class="menu-li"><a href="javascript:;" @click="scrollToPosition('explore')">Explore</a></li>
          <li>
            <div class="gain-price">
              <div>GI Currency price</div>
              <div>
                $<countTo :startVal='0' :decimals="2" :endVal='$utils.forMatPrice(baseNum + baseNum*gain/100)' :duration='1500'></countTo>
               <span style="margin-left: 5px">
                  +<countTo class="rise" :startVal='0' :decimals="2" :endVal='gain' :duration='1500'></countTo>%
               </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="sc-kDTinF gbToyq social">
          <a @click="connectWallet" href="javascript:;" class="ant-btn ant-btn-default sc-bdvvtL kpHESW">
            <span>{{ web3Register.isLogin ? $utils.centerEllipsis(web3Register.accounts, 4) : 'Connect Wallet' }}</span>
          </a>
          <a @click="swap" href="javascript:;" class="ant-btn ant-btn-default sc-bdvvtL kpHESW">
            <span>Swap</span>
          </a>
<!--          <a href="https://twitter.com/gidao_official" target="_blank" class="link twitter"></a>-->
<!--          <a href="https://discord.gg/RxKqBeut7U" target="_blank" class="link discord"></a>-->
<!--          <a href="https://t.me/+tVQOsxdYyvtlNDg1" target="_blank" class="link telegram"></a>-->
<!--          <a href="https://www.instagram.com/gidao_official/" target="_blank" class="link instagram"></a>-->
<!--          <a href="https://www.tiktok.com/@gidao_official" target="_blank" class="link tiktok"></a>-->
          <button class="sc-jrQzAO kEpCMd" :class="{'close': showMbMenu}" @click="showMenu">
            <span class="line"></span><span class="line"></span><span class="line"></span>
          </button>
        </div>
      </div>
    </header>
    <div class="sc-iqseJM jnCkIu" :class="{'open': showMbMenu}">
      <ul class="sc-crHmcD ANkXy">
        <li><a href="#!">GI DAO</a></li>
        <li><a href="#!">Vision</a></li>
        <li><a href="#!">NFT</a></li>
        <li><a href="#!">Roadmap</a></li>
        <li><a href="#!">Explore</a></li>
        <!--        <li><a href="/contact">Enroll <i class="sc-furwcr jjCFAj"></i></a></li>-->
      </ul>
      <div class="sc-kDTinF gbToyq social">
        <a href="https://twitter.com/gidao_official" target="_blank" class="link twitter"></a><a href="https://discord.gg/RxKqBeut7U" target="_blank" class="link discord"></a><a href="https://t.me/+tVQOsxdYyvtlNDg1" target="_blank" class="link telegram"></a><a href="https://www.instagram.com/gidao_official/" target="_blank" class="link instagram"></a><a href="https://www.tiktok.com/@gidao_official" target="_blank" class="link tiktok"></a>
      </div>
    </div>
  </div>
</template>
<script>
import {connectNetwork} from "@/utils/getWeb3"
import {mapState} from "vuex"
import countTo from 'vue-count-to'

export default {
  components: {
    countTo
  },
  data () {
    return {
      showMbMenu: false,
    }
  },
  computed: {
    web3Register() {
      return this.$store.state.web3Register
    },
    ...mapState({
      gain: state => state.gain,
      baseNum: state => state.baseNum
    })
  },
  methods: {
    connectWallet() {
      if (!this.web3Register.isLogin) {
        connectNetwork()
      }
    },
    scrollToPosition(id){
      document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    },
    swap() {
      this.$emit('swapCallback')
    },
    showMenu() {
      this.showMbMenu = !this.showMbMenu
    },
  }
}
</script>
<style></style>
