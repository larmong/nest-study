import { CreateProductInput } from "../dto/create-product.input";
import { UpdateProductInput } from "../dto/update-product.input";
import { Product } from "../entities/product.entity";

export interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

export interface IProductsServiceFindOne {
  productId: string;
}

export interface IProductsServiceUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

export interface IPropsServiceCheckSoldOut {
  product: Product;
}

export interface IProductServiceDelete {
  productId: string;
}
