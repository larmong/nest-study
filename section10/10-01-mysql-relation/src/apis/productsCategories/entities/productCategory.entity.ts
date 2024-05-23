import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCategory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true }) // 중복된 이름 불가능
  name: string;
}
