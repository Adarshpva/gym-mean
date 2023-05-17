//import fitness collection/model
const users = require('../models/fitnessSchema')

//get all fitness api
exports.getallfit = async (req,res)=>{
    //logic
    try{
        //get all fitness from fitness collection in mongodb
    const allfit = await users.find()
    res.status(200).json(allfit)

    }
    catch(error){
        res.status(401).json(error)
    }
    
}

    // view fitness
    exports.viewfitness = async (req,res)=>{
         const id =req.params.id



        //  logic
        try{
            const fitness = await users.findOne({id})
            if(fitness){
                // send to client
                res.status(200).json(fitness)
            }
            else{
                res.status(400).json('fitness not found')
            }
        }
        catch(error){
            res.status(401).json(error)
        }
}