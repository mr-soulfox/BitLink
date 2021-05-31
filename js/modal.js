document.getElementById('close').addEventListener('click', close)

function close() {
    document.querySelector('#qrcodeModal').style.animation = "close 0.45s"
    document.querySelector('#qrcode').innerHTML = ''
    document.querySelector('#modalContainer').style.display = 'none'
}