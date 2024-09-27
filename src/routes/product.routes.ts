import express, { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { Product } from "../entities/product.entity"; 
import { AppDataSource } from "../database/connection";

const router = express.Router();

// Crea una instancia del repositorio
const productRepository = AppDataSource.getRepository(Product);
const productController = new ProductController(productRepository);
//const productController = new ProductController();
// Define las rutas y llama a los métodos del controlador
router.get('/getProducts', productController.getProducts.bind(productController));
router.get('/getProductByID/:id', productController.getProductByID.bind(productController));
router.post('/createProduct', productController.createProduct.bind(productController));
router.patch('/updateProduct/:id', productController.updateProduct.bind(productController));
router.delete('/deleteProduct/:id', productController.deleteProduct.bind(productController));

export default router;
