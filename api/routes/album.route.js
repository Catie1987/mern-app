const express = require('express');
const router = express.Router(); 
const {createAlbum, getAlbums} = require("../controllers/album.controller")


router.post('/album/create', createAlbum );
router.get('/album/all', getAlbums );



module.exports = router;