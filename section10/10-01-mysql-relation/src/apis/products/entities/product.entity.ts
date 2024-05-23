import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductSalesLocation } from "../../productsSalesLocations/entities/productSalesLocation.entity";
import { JoinColumn, JoinTable } from "typeorm/browser";
import { ProductCategory } from "../../productsCategories/entities/productCategory.entity";
import { User } from "../../users/entities/user.entity";
import { ProductTag } from "../../productsTags/entities/productTag.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: false }) // 디폴트 값 false 설정
  isSoldOut: boolean;

  @JoinColumn()
  @OneToOne(() => ProductSalesLocation) // 일대일 ===> @JoinColumn() 추가
  productSalesLocation: ProductSalesLocation;

  @ManyToOne(() => ProductCategory) // 다대일 ===> 앞To뒤 쓸때 앞이 Product 기준이 되어야 함
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable() // 다대다 ===> (productTags) => @JoinTable(), productTags.products 추가
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
