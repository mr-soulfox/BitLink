async function redirect() {
    alert('Em construção')

    let id = document.location.search
    console.log(id)

    if (id.length == 5) {
        let data = await getOriginalLink(id)
    
        document.location.replace(data.link)

    } else {
        //document.location.replace('/')
        alert('id incorreto')

    }

}

async function getOriginalLink(id) {
    const newId = encodeURIComponent(id)

    try {
        const response = await fetch(`https://bitil.herokuapp.com/visit/${newId}`)
        const data = await response.json()

        return data

    } catch (error) {
        console.log('Deu erro')

    }
}
