function inject() {
    // console.log('inject')

    const el = document.querySelector('a[data-pjax="#js-repo-pjax-container"]')
    if(!el || !!document.getElementById('gh-page-inject')){
        return
    }
    const [_,username,repoName] = el.href.match(/^https:\/\/github.com\/(.*)\/(.*)$/)
    let url = `${username}.github.io`
    url = `https://${url}/` + (repoName === url ? '' : repoName)
    const a = document.createElement('a')
    a.className+='Label Label--outline v-align-middle btn'
    a.id = 'gh-page-inject'
    a.href = url
    a.innerHTML = 'gh-page'
    el.parentNode.parentNode.append(a)
};
window.setInterval(inject, 1000)
window.addEventListener('load', inject)
window.history.pushState = (...params) => {
    console.log(...params)
    window.history.pushState(...params)
}
window.history.replaceState = (...params) => {
    console.log(...params)
    window.history.replaceState(...params)
}