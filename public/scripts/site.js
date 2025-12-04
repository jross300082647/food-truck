const menuItems = document.querySelector(".menu-items")
const events = document.querySelector(".events")

// Functions for getting the Menu Items list and Events list
const getItems = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}

const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}

const getEvent = async id => {
    const response = await fetch(`/api/v1/events/${id}`)
    return await response.json()
}

// Adds items to the page
const showMenuItems = displayMenu => {
    console.log("ShowMenu start")

    // Creates a new containter for each menu item in the list
    displayMenu?.forEach(({item, description, price, image}) => {
        const menuItem = document.createElement("div")
        menuItem.className = "menu-item"
        menuItem.innerHTML = `
            <img src="${image}" alt="${item}">
            <h3>${item}</h3>
            <p>${description}</p>
            <p>Price: <strong>${price}</strong></p>
        `
        menuItems.appendChild(menuItem)
        console.log("ShowMenu end")
    })
}

const showEvents = displayEvents => {
    console.log("ShowEvent start")

    // Creates a new containter for each event in the list
    displayEvents?.forEach(({number, eventName, date}) => {
        const event = document.createElement("div")
        event.className = "event"
        event.innerHTML = `
            <h2>${eventName}</h2>
            <p>${date}</p>
            <div class="eventInfo">
                <p class="location"></p>
                <p class="time"></p>
            </div>
            <p class="details">Click for more info...</p>
        `

        // Click event for the event divs
        event.addEventListener('click', async () => {
            // Gets the location and time using the event/id route
            const { location, time } = await getEvent(number)
            const showInfo = event.querySelector('.eventInfo')
            const locationInfo = showInfo.querySelector('.location')
            const timeInfo = showInfo.querySelector('.time')
            const details = event.querySelector('.details')

            // Sets the text content using the 
            locationInfo.textContent = location
            timeInfo.textContent = time

            // Toggles the visibility of the eventInfo div 
            if (showInfo.style.display === "block") {
                showInfo.style.display = "none"
                details.style.display = "block"
            } else {
                showInfo.style.display = "block"
                details.style.display = "none"
            }
        })

        events.appendChild(event)
        console.log("ShowEvent end")
    })
}


(async () => {
    const displayMenu = await getItems()
    const displayEvents = await getEvents()
    console.log(displayMenu)
    console.log(displayEvents)
    showMenuItems(displayMenu)
    showEvents(displayEvents)
})()

