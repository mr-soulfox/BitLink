function shortener() {
    const input = document.querySelector('#shortInput')
    document.querySelector('#log').innerHTML = ''

    if (input.value != '') {
        
        let resultLocal = document.querySelector('#resultLocal')
        let shortLink = document.getElementById('shortLink')
        shortLink.innerHTML = ''

        //Create loading
        let elementLoad = document.createElement('img')
        elementLoad.setAttribute('src', '/assets/animated/loading.svg')
        elementLoad.setAttribute('width', '30px')

        //Add element on result local
        resultLocal.appendChild(elementLoad)

        setTimeout(() => {
            resultLocal.removeChild(elementLoad)
            shortLink.innerHTML = 'Em construção'
        
        }, 1000)


        const log = document.querySelector('#log')
        log.innerHTML = 'Novo link criado.'
        log.style.color = '#50fa7b'
        
    } else {
        
        const log = document.querySelector('#log')
        log.innerHTML = 'Link incorreto.'
        log.style.color = '#ff5555'

    }
}
