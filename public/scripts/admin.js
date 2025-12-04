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

// Functions for getting the Menu Items list and Events list (Temporary until I figure out how to get the number to increment based of the length of the DB tables)
const getItems = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}
const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}

let itemData = null
let eventData = null

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
    console.log(result)
    
})

//
const setEventInput = () => {
    eventData = {
        number: 4,
        eventName: eNameInput.value,
        location: eLocationInput.value,
        date: eDateInput.value,
        time: eTimeInput.value
    }
}

(async () => {
    const displayMenu = await getItems()
    const displayEvents = await getEvents()
})()
