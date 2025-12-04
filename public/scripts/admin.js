(async () => {
    // Gets the input elements for the items
    const iNameInput = document.querySelector('#iName')
    const iDescInput = document.querySelector('#iDesc')
    const iPriceInput = document.querySelector('#iPrice')
    const iUrlInput = document.querySelector('#iUrl')
    const itemAddButton= document.querySelector('#itemAddButton')

    // Gets the input elements for the events
    const eNameInput = document.querySelector('#eName')
    const eLocationInput = document.querySelector('#eLocation')
    const eDateInput = document.querySelector('#eDate')
    const eTimeInput = document.querySelector('#eTime')
    const eventAddButton= document.querySelector('#eventAddButton')

    // Gets the confirmation h2
    const confirmationMessage = document.querySelector('.confirmation')

    // Functions for getting the Menu Items list and Events list
    const getItems = async () => {
        const response = await fetch('/api/v1/menu')
        return await response.json()
    }
    const getEvents = async () => {
        const response = await fetch('/api/v1/events')
        return await response.json()
    }

    // Variables for the input data
    let itemData = null
    let eventData = null

    // Button click event for the POST of the menu items
    itemAddButton.addEventListener('click', async () => {
        setItemInput()
        const response = await fetch('/api/v1/menu', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        })

        const result = await response.json()
        confirmationMessage.textContent = "Item successfully added"
            setTimeout(() => {
                confirmationMessage.textContent = " "
            }, 3000)
        refreshData()
        console.log(result)
    })
    
    // Button click event for the POST of the events
    eventAddButton.addEventListener('click', async () => {
        setEventInput()
        const response = await fetch('/api/v1/events', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })

        const result = await response.json()
        if(result !== null) {
            confirmationMessage.textContent = "Event successfully added"
            setTimeout(() => {
                confirmationMessage.textContent = " "
            }, 3000)
        }
        refreshData()
        console.log(result)
    })

    // Sets the items variable to the user input
    const setItemInput = () => {
        itemData = {
            number: displayMenu.length + 1,
            item: iNameInput.value,
            description: iDescInput.value,
            price: iPriceInput.value,
            image: iUrlInput.value
        }
    }

    // Sets the events variable to the user input
    const setEventInput = () => {
        eventData = {
            number: displayEvents.length + 1,
            eventName: eNameInput.value,
            location: eLocationInput.value,
            date: eDateInput.value,
            time: eTimeInput.value
        }
    }

    const refreshData = async () => {
        // Refreshes the data
        displayMenu = await getItems()
        displayEvents = await getEvents()
    }

    // Variables used to get table length for the auto incremented Id
    let displayMenu = await getItems()
    let displayEvents = await getEvents()
})()
