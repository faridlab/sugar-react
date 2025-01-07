import api, { RequestType, RequestDataType } from '../utils/axios'

export async function get ({ url, params = {}, headers = {}, config = {} }: RequestType) {
  // const url = `/${collection}`
  return await api.get(url, { params, headers, ...config })
}

export async function post ({ url, data, params = {}, headers = {}, config = {} }: RequestDataType) {
  if (headers['Content-Type'] === 'multipart/form-data') {
    const formData = new FormData()
    if (!Array.isArray(data)) {
      for (const key in data) {
        if (data[key]) formData.append(key, data[key])
      }
    }
    data = formData
  }
  // const url = `/${collection}`
  return await api.post(url, data, { params, headers, ...config })
}

export async function put ({ url, data, params = {}, headers = {}, config = {} }: RequestDataType) {
  // const url = `/${collection}/${id}`
  return await api.put(url, data, { params, headers, ...config })
}

export async function update ({ url, data, params = {}, headers = {}, config = {} }: RequestDataType) {
  var token = await localStorage.getItem('authorization_token')

  if (!Array.isArray(data)) {
    data._method = 'PUT'
  }

  if (token) {
    headers = { Authorization: `Bearer ${token}`, ...headers }
  }

  if (headers['Content-Type'] === 'multipart/form-data') {
    const formData = new FormData()
    if (!Array.isArray(data)) {
      for (const key in data) {
        if (data[key]) formData.append(key, data[key])
      }
    }
    data = formData
  }
  return await api.post(url, data, { params, headers, ...config })
}

export async function patch ({ url, data, params = {}, headers = {}, config = {} }: RequestDataType) {
  // const url = `/${collection}/${id}`
  return await api.patch(url, data, { params, headers, ...config })
}

export async function del ({ url, data, params = {}, headers = {}, config = {} }: RequestDataType) {
  // const url = `/${collection}/${id}`
  return await api.delete(url, { data, params, headers, ...config })
}
