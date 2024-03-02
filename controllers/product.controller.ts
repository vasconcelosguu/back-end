import { Request, Response } from 'express';
import { Product } from '../models/product.models';

export class ProductController {
  public async getProducts(req: Request, res: Response): Promise<Response> {
    const products = await Product.findAll();
    return res.json(products);
  }
}
