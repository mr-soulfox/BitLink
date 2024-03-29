const storage = window.localStorage

async function update() {
    let id = document.location.search
    id = id.split('=')
    id = id[1]

    //verify clicks
    let clicks = storage.getItem('code')
    let exist = false

    //verify cache
    let link = storage.getItem(id)

    try {
        exist = clicks.search(id) == -1

    } catch (e) {
        exist = true

    }

    if (id.length == 5 && exist && link == null) {
        const options = {
            method: 'PUT',
            mode: 'cors',
            cache: 'default'
        }
    
        try {
            const res = await fetch(`https://bitil.herokuapp.com/update/${id}`, options)  
            const data = await res.json() 

            if (data.success == true) {
                const lastCode = storage.getItem('code')
                storage.setItem('code', `${lastCode}, ${data.id}`)

            }
    
        } catch (err) {
            console.log('Internal error')
    
        }

    }

}