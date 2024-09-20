import { Request, Response } from "express";
import { Product } from "../models/product.entity";
import { Repository } from "typeorm";

export class ProductController {
    constructor(public productRepository: Repository<Product>) {}

    async getProducts(req: Request, res: Response) {
        try {
            const products = await this.productRepository.find();
            res.status(200).json(products);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({ message: error.message });
            }
        }
    }

    // Método para validar si el producto existe por ID
    async validateProductExists(id: number, res: Response) {
        const product = await this.productRepository.findOneBy({ id });
        if (!product) {
            res.status(404).json({ message: 'Producto no encontrado!' });
            return null;
        }
        return product;
    }

    async getProductByID(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await this.validateProductExists(Number(id), res);
            if (!product) return; // Si no existe, ya se manejó la respuesta en validateProductExists
            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({ message: error.message });
            }
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const newProduct = this.productRepository.create(req.body);
            await this.productRepository.save(newProduct); // Es importante usar await aquí
            res.status(200).json(newProduct);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({ message: error.message });
            }
        }
    }

    async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await this.validateProductExists(Number(id), res);
            if (!product) return; // Si no existe, ya se manejó la respuesta
            await this.productRepository.update({ id: Number(id) }, req.body);
            res.status(200).json({ message: 'Producto actualizado correctamente' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({ message: error.message });
            }
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const product = await this.validateProductExists(Number(id), res);
            if (!product) return; // Si no existe, ya se manejó la respuesta
            await this.productRepository.delete({ id: Number(id) });
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send({ message: error.message });
            }
        }
    }
}
