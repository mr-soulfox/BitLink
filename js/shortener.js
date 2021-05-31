function shortener() {
    const input = document.querySelector('#shortInput')
    document.querySelector('#log').innerHTML = ''

    if (input.value != '') {
        
        let resultLocal = document.querySelector('#resultLocal')

        //Create loading
        let elementLoad = document.createElement('img')
        elementLoad.setAttribute('src', '/assets/animated/loading.svg')
        elementLoad.setAttribute('width', '30px')

        //Add element on result local
        resultLocal.appendChild(elementLoad)

        setInterval(() => resultLocal.removeChild(elementLoad), 3000)

        const log = document.querySelector('#log')
        log.innerHTML = 'Novo link criado.'
        log.style.color = '#50fa7b'
        
    } else {
        
        const log = document.querySelector('#log')
        log.innerHTML = 'Link incorreto.'
        log.style.color = '#ff5555'

    }
}
