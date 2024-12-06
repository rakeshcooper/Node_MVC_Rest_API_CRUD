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
     createAt: {
        type: Date,
        immutable:true,
        default:() => new Date(),
    },
})


module.exports = mongoose.model('ProductVal',productValidateSchema)