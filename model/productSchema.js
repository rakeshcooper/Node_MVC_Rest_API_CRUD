const mongoose =  require('mongoose')


const productValidateSchema = new mongoose.Schema({
    id:String,
    names: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
   _id: false,
    field: { 
        type: String 
    },
     createAt: {
        immutable:true,
        type: Date,
        default:() => new Date(),
    },

    updateAt: {
        type: Date,
        default:() => new Date(),
    },
})


module.exports = mongoose.model('ProductVal',productValidateSchema)