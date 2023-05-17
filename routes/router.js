//import express
const express = require('express')

const fitnessController = require('../controllers/fitnessController')

//using express create object for routerclass in order to setup path
const router = new express.Router()

//api
//get-all-fitness
router.get('/users/all-fit',fitnessController.getallfit)


// view fitness/id
router.get('/users/view-fitness/:id',fitnessController.viewfitness)


module.exports =router