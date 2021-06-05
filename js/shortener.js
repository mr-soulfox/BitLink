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

        let inputValue = input.value

        if (inputValue.search('https://') == -1) {
            inputValue = 'https://' + inputValue

        }

        let data = await verifyUrl(inputValue)
        console.log(data)

        if (data.isUrl == true) {
            const created = await createUrl(inputValue)
            console.log(created)

            resultLocal.removeChild(elementLoad)
            resultLocal.innerHTML = `<span id="shortLink">${created.link}</span>`

            if (created.exist == true) {
                const log = document.querySelector('#log')
                log.innerHTML = 'Link já existe.'
                log.style.color = '#50fa7b'

            } else {
                const log = document.querySelector('#log')
                log.innerHTML = 'Novo link criado.'
                log.style.color = '#50fa7b'

            }


            
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

    try {
        const response = await fetch(`https://bitil.herokuapp.com/verify?url=${encodingUrl}`)
        const data = await response.json()

        return data

    } catch (error) {
        console.log('Internal error')

    }

}

async function createUrl(url) {
    let json = {
        link: url
    }

    console.log(url)

    const options = {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(json)
    }

    try {
        const res = await fetch('https://bitil.herokuapp.com/save/public', options)  
        const data = await res.json() 
        
        return data

    } catch (err) {
        console.log('Internal error')

    }
    
}
