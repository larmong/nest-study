import { Injectable, Scope } from "@nestjs/common";
import { Board } from "./entities/board.entity";
import { IBoardsServiceCreate } from "./interfaces/boards-service.interface";

// @Injectable({ scope: Scope.DEFAULT }) or @Injectable() ===> 싱글톤(new 한 번)
// @Injectable({ scope: Scope.REQUEST }) ===> 매 요청마다 new
// @Injectable({ scope: Scope.TRANSIENT }) ===> 매 주입마다 new

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    // 1. DB에 접속 후 데이터 조회 => 데이터를 조회했다고 가정
    // 2. DB 에서 꺼내온 결과를 브라우저에 응답(response)
    return [
      {
        number: 1,
        writer: "철수",
        title: "안녕하세요! 철수입니다~!",
        contents: "철수에여~~~",
      },
      {
        number: 2,
        writer: "영희",
        title: "영희입니다~!",
        contents: "반가워요!",
      },
      {
        number: 3,
        writer: "훈이",
        title: "안녕하세요!",
        contents: "훈이에여!!!!!!",
      },
    ];
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB에 접속 후 데이터를 저장 => 데이터를 저장했다고 가정

    // 3. DB에 저장된 결과를 브라우저에 응답(response)
    return "게시물이 등록되었습니다!";
  }
}
