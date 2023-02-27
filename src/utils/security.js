const addToken = (token) => {
  document.cookie = `jwt=${token};`
  // document.cookie = `jwt=${token}; Secure; HttpOnly; SameSite=Strict`
}

const removeToken = () => {
  document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC;'
  // 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; HttpOnly;'
}

const getToken = () => {
  const jwtCookie = document.cookie
    .split(';')
    .find((cookie) => cookie.startsWith('jwt='))
  if (!jwtCookie) {
    return null
  }
  const token = jwtCookie.split('=')[1]
  return token
}

const hasToken = () => {
  const token = getToken()
  return !!token
}

export { addToken, removeToken, getToken, hasToken }