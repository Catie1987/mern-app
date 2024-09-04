const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const pictureSchema = new mongoose.Schema({

   description: {
       type: String,
       trim: true,
       required : [true, 'Please add image Description'],
       maxlength: 2000,
   },

   image: {
       public_id: {
           type: String,
           required: true
       },
       url: {
           type: String,
           required: true
       }
   
   },

   album: {
       type: ObjectId,
       ref: "Album",
       default: 'uncategorized',
   
   },

 


}, {timestamps: true});





const Picture = mongoose.model('Picture', pictureSchema);
export default Picture;