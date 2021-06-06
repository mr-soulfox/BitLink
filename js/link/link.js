async function openResultInSearch() {
    const searchResult = document.getElementById('searchResult')

    if (document.getElementById('searchLink').value.length >= 5) {
        searchResult.innerHTML = ''
        
        //Create loading
        let elementLoad = document.createElement('img')
        elementLoad.setAttribute('src', '/assets/animated/loading.svg')
        elementLoad.setAttribute('width', '60px')

        let link = document.getElementById('searchLink').value

        if (link.search('https://bitlink.netlify.app/') != -1) {
            let id = link.substring(28, link.length)

            if (id.length > 5 || id.length < 5) {
                alert('valor invalido')

            } else {
                searchResult.style.animation = 'openSearch 1s 0.3s both'
                
                //Add element on result local
                setTimeout(() => {
                    searchResult.appendChild(elementLoad)
                    
                }, 400)

                
                let info = await getInfo(id)
                
                searchResult.innerHTML = 'Em construção...'
                searchResult.removeChild(elementLoad)

            }

        } else {
            console.log('pq')

        }


    }

}

function getInfo(id) {
    console.log('a')
    return 'a'
}
