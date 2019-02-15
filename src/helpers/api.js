const baseURL = 'http://localhost:5000/api'

const requestHandler = res => {
  return res.json()
}

const errorHandler = err => {
  console.error(err)
  throw err
}

const fetchi = (url, params) => {
  url = baseURL + url
  const f = params ? fetch(url, params) : fetch(url)
  return f.then(requestHandler).catch(errorHandler)
}

export const get = url => fetchi(url)

export const post = (url, data) => {
  const params = {
    method: 'POST',
    body: data,
  }
  return fetchi(url, params)
}

export const put = (url, data) => {
  const params = {
    method: 'PUT',
    body: data,
  }
  return fetchi(url, params)
}

export const patch = (url, data) => {
  const params = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  return fetchi(url, params)
}

export const remove = (url, data) => {
  const params = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  return fetchi(url, params)
}
