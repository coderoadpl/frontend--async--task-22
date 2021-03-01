import { makeRequest } from './makeRequest'
import { getIdToken } from './token'

export const makeAuthorizedRequest = (url, options) => {
    const token = getIdToken()

    if (!token) return Promise.reject('No token found')

    const containsQuestionMark = url.indexOf('?') !== -1

    const urlWithToken = `${url}${containsQuestionMark ? '&' : '?'}auth=${token}`

    return makeRequest(urlWithToken, options)
}

export default makeAuthorizedRequest
