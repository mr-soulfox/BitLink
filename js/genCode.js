async function qrCode() {    
    let input = document.getElementById('shortInput')
    let value = input.value

    let resultLocal = document.querySelector('#resultLocal')
   
    //Create loading
    let elementLoad = document.createElement('img')
    elementLoad.setAttribute('src', '/assets/animated/loading.svg')
    elementLoad.setAttribute('width', '30px')
    resultLocal.appendChild(elementLoad)

    if (value.search('https://') == -1 && value.search('http://') == -1) {
        value = 'https://' + value
        
    }

    if (value.length >= 1000) {
        const created = await window.createUrl(value)
        value = created.link

    }

    const log = document.querySelector('#log')
    log.innerHTML = ''
    
    document.querySelector('#shortLink').innerHTML = ''

    const data = await window.verifyUrl(value)

    if (data.isUrl == true) {
        input.value = ''
        resultLocal.removeChild(elementLoad)
    
        if (value != '') {
    
            let modalContainer = document.querySelector('#modalContainer')
            modalContainer.style.display = 'flex'
            modalContainer.style.animation = 'asideModal 0.50s ease-in-out both'
        
            document.querySelector('#qrcodeModal').style.animation = "modal 0.45s ease-in-out both"
            
            let qrcode = document.querySelector('#qrcode')
            
            //Create loading
            let elementLoad = document.createElement('img')
            elementLoad.setAttribute('src', '/assets/animated/loading.svg')
            elementLoad.setAttribute('width', '90px')
        
            //Add element on qrcode local
            qrcode.appendChild(elementLoad)
        
            setTimeout(() => genCode(value, qrcode), 500)
            
        } else {

            log.innerHTML = 'Link incorreto.'
            log.style.color = '#ff5555'
    
        }

    } else {
        resultLocal.removeChild(elementLoad)

        log.innerHTML = 'Link incorreto.'
        log.style.color = '#ff5555'

    }


}

function genCode(value, local) {

    local.innerHTML = ''

    let qrcode = new QRCode(local, {
        width: 200,
        height: 200,
        colorDark: '#44475a',
        colorLight: '#f8f8f2',
        correctLevel: QRCode.CorrectLevel.H
    })
    qrcode.makeCode(value)
}

function download() {
    const qrcode = document.querySelector('#qrcode > img').getAttribute('src')

    //create link
    let link = document.createElement('a')
    link.setAttribute('href', qrcode)
    link.setAttribute('download', "qrcode.jpg")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

}
