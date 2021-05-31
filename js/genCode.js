function qrCode() {
    let input = document.getElementById('shortInput')
    let value = input.value
    input.value = ''

    if (value != '') {
        const log = document.querySelector('#log').innerHTML = ''

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

        const log = document.querySelector('#log')
        log.innerHTML = 'Link incorreto.'
        log.style.color = '#ff5555'

    }

}

function genCode(value, local) {

    local.innerHTML = ''

    let qrcode = new QRCode(local, {
        text: value,
        width: 190,
        height: 190,
        colorDark: '#282a36',
        colorLight: '#f8f8f2',
        correctLevel: QRCode.CorrectLevel.H
    })
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
