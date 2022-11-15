import { Request, Response } from 'express';
import { Product } from '../../models/Product';
export async  function creatProducts (req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, category, price, ingredients } = req.body;


    const product = await Product.create({
      name,
      description,
      imagePath: imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : []
    });

    res.status(201).json(product);

  } catch {
    res.sendStatus(500);
  }
}
