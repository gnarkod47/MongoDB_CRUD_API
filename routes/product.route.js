import express from "express";
import { getproducts, getproduct, createProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';//gets the controllers or functions that have the operations in them
const router = express.Router()

router.get('/', getproducts)
router.get('/:id', getproduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router;