const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')
const { get } = require('../../static')

let menuCollection = null
let eventsCollection = null

// get Menu collection
const getMenu = async () => {
    if (!menuCollectioncollection) menuCollectioncollection = await getCollection('FoodTruckAPI', 'Menu')
        return menuCollection
}

// get Events collection
const getEvents = async () => {
    if (!eventsCollection) eventsCollection = await getCollection('FoodTruckAPI', 'Events')
        return eventsCollection
}

// Get API menu 
router.get('/menu',  async (request, response) => {
    try {
        const collection = await getMenu()
        const menuItems = await collection.find({}).toArray()
    }
    
