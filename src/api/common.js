import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: 'kollist',
    method: 'get',
    params
  })
}
export function fetchMintNum(data) {
  return request({
    base: '1',
    url: 'https://invite.daddychain.workers.dev',
    method: 'post',
    data
  })
}
export function bingUser(data) {
  return request({
    base: '1',
    url: 'https://invite.daddychain.workers.dev',
    method: 'put',
    data
  })
}
