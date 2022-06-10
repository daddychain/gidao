import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: 'kollist',
    method: 'get',
    params
  })
}
export function fetchMintNum(params) {
  return request({
    base: '1',
    url: 'http://194.163.34.240:9090/v1/invate',
    method: 'get',
    params
  })
}
export function bingUser(data) {
  return request({
    base: '1',
    url: 'http://194.163.34.240:9090/v1/invate',
    method: 'post',
    data
  })
}
