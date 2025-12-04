const menuItems = document.querySelector(".menu-items")

// Functions for getting the Menu Items list and Events list
const getItems = async () => {
    const response = await fetch('/api/v1/menu')
    return await response.json()
}

const getEvents = async () => {
    const response = await fetch('/api/v1/events')
    return await response.json()
}

// Adds items to the page
const showMenuItems = displayMenu => {
    console.log("ShowMenu start")
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


(async () => {
    const displayMenu = await getItems()
    console.log(displayMenu)
    showMenuItems(displayMenu)
})()

