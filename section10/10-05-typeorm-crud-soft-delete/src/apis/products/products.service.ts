import { HttpException, HttpStatus, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "./entities/product.entity";
import {
  IProductServiceDelete,
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

  async delete({ productId }: IProductServiceDelete): Promise<boolean> {
    // 1. 실제 데이터 삭제
    // const result = await this.productsRepository.delete({ id: productId });
    // return !!result.affected;

    // 2. 소프트 삭제 - isDeleted
    // this.productsRepository.update({ id: productId }, { isDeleted: true })

    // 3. 소프트 삭제 - deletedAt
    // this.productsRepository.update({ id: productId }, { deletedAt: new Date() })

    // 4. 소프트 삭제(TypeORM 제공) - softRemove
    // this.productsRepository.softRemove({ id: productId });
    // - 장점: 여러개의 ID 한번에 지우기 가능(배열) [{id: aaa}, {id: bbb}, {id: ccc}]
    // - 단점: id로만 삭제 가능

    // 5. 소프트 삭제(TypeORM 제공) - softDelete
    // this.productsRepository.softDelete({ id: productId });
    // - 장점: ID 말고 다른 컬런으로도 삭제 가능
    // - 단점: 여러개의 ID 한번에 지우기 불가능

    const result = await this.productsRepository.softDelete({ id: productId });
    return !!result.affected;
  }
}
