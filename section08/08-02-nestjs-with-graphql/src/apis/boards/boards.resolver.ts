import { BoardsService } from './boards.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService //
  ) {}

  // 기본적으로 타입에 ! 붙지만 { nullable: true } 추가하면 사라짐
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boardsService.qqq();
  }
}
