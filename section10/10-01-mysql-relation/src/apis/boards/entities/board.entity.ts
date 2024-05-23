import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";

@Entity()
@ObjectType() // graphql
export class Board {
  @PrimaryGeneratedColumn("increment")
  @Field(() => Int) // graphql
  number: number;

  @Column()
  @Field(() => String) // graphql
  writer: string;

  @Column()
  @Field(() => String) // graphql
  title: string;

  @Column()
  @Field(() => String) // graphql
  contents: string;
}
