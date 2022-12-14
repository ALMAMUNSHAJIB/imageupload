const router = require('express').Router();
const UserController = require('../controller/UserController');
const fileUpload = require('../utils/fileUpload');


router.post('/create-user', fileUpload("./storage/images"), UserController.createUser);
router.get('/all-user', UserController.allUser);
router.get('/single-user/:id', UserController.singleUser);
router.post('/update-user/:id', fileUpload("./storage/images"), UserController.updateUser);
router.delete('/delete-user/:id', UserController.deleteUser);



module.exports = router;