export const signout = e => {
  e.preventDefault()
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  window.location.reload(true)
}