const mongoose =  require('mongoose')


const productValidateSchema = new mongoose.Schema({
    id:String,
    names: {
        type: String,
        required: true
    },
    desc: String
})


module.exports = mongoose.model('ProductVal',productValidateSchema)