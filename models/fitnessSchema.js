 const mongoose = require('mongoose')

//define schema for product collection to store data
const fitnessSchema = new mongoose.Schema({
    
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    resistancetraining:{
        type:String,
        required:true
    },
    
 caloricsurplus:{
        type:String,
        required:true
    },
    
proteinintake:{
        type:String,
        required:true
    },
    hydration:{
        type:String,
        required:true
    },
    trackyourprogress:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

//const model to store products
const users = new mongoose.model("users",fitnessSchema)

//export model
module.exports = users