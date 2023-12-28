import { Injectable, Scope } from '@nestjs/common';

import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
    const result = [
      { number: 1, writer: '철수', title: '111 제목', contents: '111 내용' },
      { number: 2, writer: '영희', title: '222 제목', contents: '222 내용' },
      { number: 3, writer: '훈이', title: '333 제목', contents: '333 내용' },
    ];

    // 2. DB에서 꺼내온 데이터를 응답(res)
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내 준 데이터 확인
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB에 접속 후 데이터를 저장 => 데이터 저장했다고 가정

    // 2. DB에 저장된 결과를 브라우저에 응답(res)
    return '게시물 등록에 성공하였습니다.';
  }
}
