import packageInfo from '../../package.json'

// https://stackoverflow.com/a/69343460/16237146
const cacheCheck = () => {
  let version = localStorage.getItem('version')
  if (version != packageInfo.version) {
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          caches.delete(name)
        })
      })
      window.location.reload(true)
    }
    localStorage.clear()
    localStorage.setItem('version', packageInfo.version)
  }
}

export default cacheCheck
