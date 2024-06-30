import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ProductSalesLocation } from "../../productsSalesLocations/entities/productSalesLocation.entity";
import { ProductCategory } from "../../productsCategories/entities/productCategory.entity";
import { User } from "../../users/entities/users.entity";
import { ProductTag } from "../../productsTags/entities/productTag.entity";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldOut: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSalesLocation)
  @Field(() => ProductSalesLocation)
  productSalesLocation: ProductSalesLocation;

  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];

  @CreateDateColumn() // 데이터 등록시 등록 시간 자동으로 추가
  createAt: Date;

  @UpdateDateColumn() // 데이터 수정시 수정 시간 자동으로 추가
  updateAt: Date;

  @DeleteDateColumn() // softDelete 삭제 기록을 위함
  deletedAt: Date;
}
