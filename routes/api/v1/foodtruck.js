const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')

let menuCollection = null
let eventsCollection = null

// get Menu collection
const getMenu = async () => {
    if (!menuCollection) menuCollection = await getCollection('FoodTruckAPI', 'Menu')
    return menuCollection
}

// get Events collection
const getEvents = async () => {
    if (!eventsCollection) eventsCollection = await getCollection('FoodTruckAPI', 'Events')
    return eventsCollection
}

// Get API for menu items
router.get('/menu',  async (request, response) => {
    const collection = await getMenu()
    const menuItems = await collection.find({}).toArray()
    if (menuItems && menuItems.length > 0) {
        response.json(menuItems)
    } else {
        response.send({ error: { message: 'No menu items found'} })
    }
})

// Get API for events
router.get('/events', async (request, response) => {
    const collection = await getEvents()
    const events = await collection.find({}).toArray()
    if (events && events.length > 0) {
        response.json(events)
    } else {
        response.send({ error: { message: 'No events found'} })
    }
})

router.get('/menu/:id', async (request, response) => {
    const id = request.params.id
})

module.exports = router;