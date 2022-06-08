let util = {
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
}
export default util
