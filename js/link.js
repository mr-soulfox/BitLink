document.getElementById('searchLink').addEventListener('keydown', openResultInSearch)

function openResultInSearch(e) {
    const searchResult = document.getElementById('searchResult')

        
    if (document.getElementById('searchLink').value.length == 4) {
        searchResult.innerHTML = '<span>Pressione ENTER</span>'

    }

    if (document.getElementById('searchLink').value.length >= 5 && e.code == 'Enter') {
        searchResult.innerHTML = ''
        searchResult.style.animation = 'openSearch 1s 0.3s both'
        
        //Create loading
        let elementLoad = document.createElement('img')
        elementLoad.setAttribute('src', '/assets/animated/loading.svg')
        elementLoad.setAttribute('width', '60px')

        //Add element on result local
        setTimeout(() => {
            searchResult.appendChild(elementLoad)

        }, 1400)

        setTimeout(() => {
            searchResult.removeChild(elementLoad)
            searchResult.innerHTML = 'Em construção...'

        }, 3000)

    }

}