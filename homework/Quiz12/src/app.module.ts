import { Module } from "@nestjs/common";
import { StarbucksModule } from "./api/starbucks/starbucks.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    StarbucksModule,

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/common/graphql/schema.gql",
    }),
  ],
})
export class AppModule {}
