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
    url: 'https://www.abcdaddy.xyz/v1/invate',
    method: 'get',
    params
  })
}
export function bingUser(data) {
  return request({
    base: '1',
    url: 'https://www.abcdaddy.xyz/v1/invate',
    method: 'post',
    data
  })
}
export function fetchPrice(params) {
  return request({
    base: '1',
    url: 'https://www.abcdaddy.xyz/v1/price',
    method: 'get',
    params
  })
}
