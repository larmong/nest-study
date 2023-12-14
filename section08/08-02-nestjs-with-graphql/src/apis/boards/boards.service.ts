import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
// scope 인젝션 스코프: 1. 싱글톤(DEFAULT) => new 한번
//                   2. Request 스코프 => 매 요청마다 new
//                   3. TRANSIENT 스코프 => 모든 곳에서 new

export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
