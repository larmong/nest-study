import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { BoardsModule } from "./apis/boards/boards.module";

@Module({
  imports: [
    BoardsModule,
    // ProductsModule,
    // UsersModule,

    // GraphQL 설정
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/common/graphql/schema.gql",
    }),
  ],
})
export class AppModule {}
