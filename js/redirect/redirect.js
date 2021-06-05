async function redirect() {
    let id = document.location.search
    id = id.split('=')
    id = id[1]

    if (id.length == 5) {
        let data = await getOriginalLink(id)
    
        document.location.replace(data.link)

    } else {
        document.location.replace('/')

    }

}

async function getOriginalLink(id) {
    const newId = encodeURIComponent(id)

    try {
        const response = await fetch(`https://bitil.herokuapp.com/visit/${newId}`)
        const data = await response.json()

        return data

    } catch (error) {
        console.log('Internal error')

    }
}
