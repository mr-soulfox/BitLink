async function shortener() {
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

        let data = await verifyUrl(input.value)
        console.log(data)

        if (data.isUrl == true) {
            resultLocal.removeChild(elementLoad)
            
            resultLocal.innerHTML = '<span id="shortLink">Em construção</span>'

            const log = document.querySelector('#log')
            log.innerHTML = 'Novo link criado.'
            log.style.color = '#50fa7b'
            
        } else {
            resultLocal.removeChild(elementLoad)
            
            const log = document.querySelector('#log')
            log.innerHTML = 'Link incorreto.'
            log.style.color = '#ff5555'
        }  
        
    } else {
        
        const log = document.querySelector('#log')
        log.innerHTML = 'Link incorreto.'
        log.style.color = '#ff5555'

    }
}

async function verifyUrl(url) {
    const encodingUrl = encodeURIComponent(url)
    console.log(encodingUrl)

    try {
        const response = await fetch(`https://bitil.herokuapp.com/verify?url=${encodingUrl}`)
        const data = await response.json()

        return data

    } catch (error) {
        console.log('Internal error')

    }

}
