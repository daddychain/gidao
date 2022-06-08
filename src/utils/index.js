import config from '@/service/index'
import store from '@/store/index'
import Web3 from "web3"

let utils = {
  isMobile: function (url) {
    let flag = navigator.userAgent.match(/(phone|pad|mkccapp|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag ? true : false;
  },
  centerEllipsis (str, num = 8) {
    if (str) {
      if (str.length > num * 2) {
        const firstStr = str.substr(0, num)
        const lastStr = str.substr(-num, num)
        return firstStr + '...' + lastStr
      } else {
        return str
      }
    }
  },
  getBalance (addresse) {
    return new Promise((resolve, reject) => {
      const web3 = new Web3(window.ethereum)
      const {chiaIdConfig} = config
      const contract = new web3.eth.Contract(chiaIdConfig.gi_abi, chiaIdConfig.contract.gi_contract)
      contract.methods.balanceOf(addresse).call((err, result) => {
        if (!result) return
        const balance = parseFloat(Web3.utils.fromWei(result, 'ether'))
        store.dispatch('getBalance', balance)
        resolve(balance)
      })
    })
  },
  randomNumber(min = 30, max = 35) {
    return Math.random() * (max - min) + min
  }
}
export default utils
