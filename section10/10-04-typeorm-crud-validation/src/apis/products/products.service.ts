import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
  IPropsServiceCheckSoldOut,
} from "./interfaces/products-service.interface";
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

  async update({ productId, updateProductInput }: IProductsServiceUpdate): Promise<Product> {
    const product = await this.findOne({ productId });

    // const product = await this.productsRepository.findOne({
    //   where: { id: productId },
    // });

    this.checkSoldOut({ product });

    try {
      const result = this.productsRepository.save({
        ...product,
        ...updateProductInput,
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  checkSoldOut({ product }: IPropsServiceCheckSoldOut): void {
    if (product.isSoldOut) {
      throw new UnprocessableEntityException("이미 핀메 완료된 상태입니다.");
    }

    // if (product.isSoldOut === true) {
    //   throw new HttpException("이미 핀메 완료된 상태입니다.", HttpStatus.UNPROCESSABLE_ENTITY);
    // }
  }
}
