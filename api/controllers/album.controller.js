const Album = require("../models/album");
const ErrorResponse = require('../utils/errorResponse');


exports.createAlbum = async (req, res, next)=>{


    try {
        const album = await Album.create(req.body);
        res.status(201).json({
            success: true,
            album
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}

//get all caregories
exports.getAlbums = async (req, res, next)=>{

    try {
        const albums = await Album.find();
        res.status(201).json({
            success: true,
            albums
        })
        
    } catch (error) {
        console.log(error);
        next(error);
        
    }
   
}