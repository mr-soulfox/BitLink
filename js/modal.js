function closeModal(id) {
    if (id == "qrcode") {        
        document.querySelector('#qrcodeModal').style.animation = "close 0.45s"
        document.querySelector('#qrcode').innerHTML = ''
        document.querySelector('#modalContainer').style.display = 'none'

    } else if (id == "link") {
        document.querySelector('#linkModal').style.animation = 'close 0.45s'
        document.querySelector('#linkModal').style.display = 'none'
        document.querySelector('#modalContainer').style.display = 'none'
    }
}

function openModal() {
    let modalContainer = document.querySelector('#modalContainer')
    modalContainer.style.display = 'flex'
    modalContainer.style.animation = 'asideModal 0.50s ease-in-out both'

    document.querySelector('#linkModal').style.display = 'block'
    document.querySelector('#linkModal').style.animation = "modal 0.45s ease-in-out both"
}
