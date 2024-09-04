import Picture from '../models/picture.model.js';
import { errorHandler } from '../utils/error.js';
import Album from '../models/album.model.js'
import cloudinary from '../utils/cloudinary.js'

export const createPicture = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to upload Picture'));
    }
    if (!req.body.title || !req.body.content) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
    const { description, image, album } = req.body;
    const result = await cloudinary.uploader.upload(image, {
        folder: "pictures",
        // width: 300,
        // crop: "scale"
    });
    const newPicture = new Picture({
        description,
        image: {
                public_id: result.public_id,
                url: result.secure_url
            },
        album,
      });
      try {
        const savedPicture = await newPicture.save();
        res.status(201).json(savedPicture);
      } catch (error) {
        next(error);
      }
    
  };


  export const displayPicture = async (req, res, next) => {

    //enable pagination
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Picture.find({}).estimatedDocumentCount();

    //all categories ids
    let ids = [];
    const alb = await Album.find({}, { _id: 1 });
    alb.forEach(cat => {
        ids.push(cat._id);
    })

    //filter
    let cat = req.query.cat;
    let query = cat !== '' ? cat : ids;


    try {

        const pictures = await Picture.find({ album: query }).populate('album', 'description')
            .skip(pageSize * (page - 1))
            .limit(pageSize)

        res.status(201).json({
            success: true,
            pictures,
            page,
            pages: Math.ceil(count / pageSize),
            count
        })

    } catch (error) {
        console.log(error);
        next(error);

    }

};

// Update product image in Cloudinary and product data in MongoDB.
export const updatePicture = async (req, res, next) => {
    try {
        //current product
        const currentPicture = await Picture.findById(req.params.id);

        //build the data object
        const data = {
            description: req.body.description,
            album: req.body.album
        }

        //modify image conditionnally
        if (req.body.image !== '') {
            const ImgId = currentPicture.image.public_id;
            if (ImgId) {
                await cloudinary.uploader.destroy(ImgId);
            }

            const newImage = await cloudinary.uploader.upload(req.body.image, {
                folder: "pictures",
                width: 500,
                crop: "scale"
            });

            data.image = {
                public_id: newImage.public_id,
                url: newImage.secure_url
            }
        }

        const pictureUpdate = await Picture.findOneAndUpdate(req.params.id, data, { new: true })

        res.status(200).json({
            success: true,
            pictureUpdate
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

};



// delete product and product image in cloudinary
export const deletePicture = async (req, res, next) => {

    try {
        const picture = await Picture.findById(req.params.id);
        //retrieve current image ID
        const imgId = picture.image.public_id;
        if (imgId) {
            await cloudinary.uploader.destroy(imgId);
        }

        const rmPicture = await Picture.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: " Picture deleted",

        })

    } catch (error) {
        console.log(error);
        next(error);

    }

};





// display category
export const pictureAlbum = async (req, res, next) => {

    try {
        const cat = await Picture.find().populate('album', 'description').distinct('album');
        res.status(201).json({
            success: true,
            cat
        })

    } catch (error) {
        console.log(error);
        next(error);
    }

};