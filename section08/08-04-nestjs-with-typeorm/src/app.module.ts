import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';

import { Board } from './apis/boards/entities/board.entity';

@Module({
  imports: [
    BoardsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dkfmahd',
      database: 'myproject',
      entities: [Board],
      synchronize: true, // class 만든거 대로 디비버에 생성
      logging: true, // ORM 변환 전 실행 명령어 보여줌
    }),
  ],
})
export class AppModule {}
