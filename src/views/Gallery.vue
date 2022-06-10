<template>
  <div>
    <hd></hd>
    <div class="sc-dkPtRN sc-hKwDye sc-gIDmLj ehgiey kgwayD iNPiJA">
      <div class="sc-XxNYO leCRYQ">
        <div class="infinite-scroll-component__outerdiv">
          <div class="infinite-scroll-component " style="height: auto; overflow: auto;">
            <div class="sc-kYHfwS hrMgWU">
                <div class="sc-ilfuhL hReMBz" v-for="(item, index) in list" :key="index">
                  <div class="sc-uojGG eakxto">
                    <div class="sc-xiLah bmtoaF">
                      <img :src="item.cover_image" :alt="item.name">
                    </div>
                    <svg color="#fff" fill="#fff" height="22" role="img" viewBox="0 0 48 48" width="22">
                      <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                    </svg>
                    <div class="sc-eGPXGI bIUIxz">
                      <div style="width: 100%;">
                        <div class="name">{{item.name}}</div>
                        <div class="social-info">
                          <a :href="item.instagram_url" target="_blank">{{item.instagram_name}}
                            <div class="sc-bilyIR Nesqo instagram"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <ft></ft>
  </div>
</template>
<script>
import hd from '@/components/header'
import ft from '@/components/footer'
import {fetchList} from '@/api/common'

export default {
  components: {
    hd,
    ft
  },
  data () {
    return {
      list: [],
      total: 0,
      pagesize: 12,
      page: 1,
      busy: false
    }
  },
  computed: {},
  methods: {
    handleScroll (event) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollTop + windowHeight >= scrollHeight) {
        if (this.page <= Math.ceil(this.total/this.pagesize)) {
          this.getList()
        }
      }
    },
    getList() {
      if (this.busy) {
        return false
      }
      this.busy = true
      fetchList({pagesize: this.pagesize, page: this.page}).then(res => {
        this.busy = false
        const {data, total} = res.data
        if (data.rows && data.rows.length > 0) {
          this.list = [...this.list, ...data.rows]
          this.total = data.total
          this.page++
        }
      }).catch(err => {
        this.busy = false
      })
    }
  },
  mounted () {
    this.getList()
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style scoped lang="scss">

</style>
<style>
.sc-gIDmLj {
  min-height: 500px;
}
.vuejs-refresh-track {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
}
</style>
