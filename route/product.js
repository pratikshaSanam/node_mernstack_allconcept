const express = require('express');
const productController = require('../controller/product')


const router = express.Router();

router
.get('/',productController.getonProduct)
    

.get('/:id', productController.getProduct)

.post('/', productController.addProduct)


.delete('/:id',productController.delProduct)

.put('/:id',productController.replaceProduct)

.patch('/:id',productController.updateproduct)


exports.router = router;