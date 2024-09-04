import express from 'express';
import { createPicture, displayPicture, deletePicture, pictureAlbum, updatePicture } from "../controllers/picture.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/piture/create', verifyToken, createPicture)
router.get('/pictures/all', displayPicture)
router.delete('/picture/delete/:id', verifyToken, deletePicture)
router.put('/picture/update/:id', verifyToken, updatePicture)
router.get('/picture/albums', pictureAlbum)


export default router;