import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductSalesLocation {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  address: string;

  @Column()
  addressDetail: string;

  @Column({ type: "decimal", precision: 9, scale: 6 }) // 위도
  lat: number;

  @Column({ type: "decimal", precision: 9, scale: 6 }) // 경도
  lng: number;

  @Column()
  meetingTime: Date;
}
