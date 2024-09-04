const mongoose = require('mongoose');



const albumSchema = new mongoose.Schema({

   name: {
       type: String,
       trim: true,
       required : [true, 'Please add an Album Name'],
      
   },



}, {timestamps: true});






module.exports = mongoose.model("Album", albumSchema);