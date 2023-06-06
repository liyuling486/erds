import hRequest from './index.js'

export const getLoginData = () => {
  return hRequest.get('/platform/noLogin/platformCompany/queryList', {})
}

export const getIdentifyingCode = () => {
  return hRequest.get('/code', {})
}