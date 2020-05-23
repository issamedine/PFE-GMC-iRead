const mongoose = require('mongoose')

const eventPersonSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    age: {
        type: Number,
        // required: true
    },
    adresse: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    password:{
        type:String,
        required:true
    },
    role:['admin',"author",'user']
})

let EventModelPerson = mongoose.model('persons', eventPersonSchema)

module.exports = EventModelPerson