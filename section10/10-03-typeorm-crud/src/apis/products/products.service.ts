import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import { IProductsServiceCreate, IProductsServiceFindOne } from "./interfaces/products-service.interface";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product> //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
      // name: "마우스",
      // description: "정말 좋은 마우스",
      // price: 3000,
    });

    // result = {
    //   id: "askdjalskdjlaskd"
    //   name: "마우스",
    //   description: "정말 좋은 마우스",
    //   price: 3000,
    // };

    return result;
  }
}
