const express = require('express');
const userController = require('../controller/user')


const router = express.Router();

router
.get('/',userController.getallUsers)
    

.get('/:id', userController.getUser)

.post('/', userController.addUser)


.delete('/:id',userController.delUser)

.put('/:id',userController.updateUser)

.patch('/:id',userController.replaceUser)


exports.router = router;