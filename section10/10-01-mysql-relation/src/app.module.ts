import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { BoardsModule } from "./apis/boards/boards.module";
import { Board } from "./apis/boards/entities/board.entity";
import { Product } from "./apis/products/entities/product.entity";
import { ProductTag } from "./apis/productsTags/entities/productTag.entity";
import { ProductSalesLocation } from "./apis/productsSalesLocations/entities/productSalesLocation.entity";
import { User } from "./apis/users/entities/user.entity";
import { ProductCategory } from "./apis/productsCategories/entities/productCategory.entity";

@Module({
  imports: [
    BoardsModule,
    // ProductsModule,
    // UsersModule,

    ConfigModule.forRoot(), // process.env 보다 위에 설정되어야 함!

    // GraphQL 설정
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/common/graphql/schema.gql",
    }),

    // typeorm
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as "mysql",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [Board, Product, ProductTag, ProductSalesLocation, ProductCategory, User],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
