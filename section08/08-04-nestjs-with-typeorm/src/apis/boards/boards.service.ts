import { Injectable, Scope } from '@nestjs/common';

// @Injectable({ scope: Scope.DEFAULT }) or @Injectable() ===> 싱글톤(new 한 번)
// @Injectable({ scope: Scope.REQUEST }) ===> 매 요청마다 new
// @Injectable({ scope: Scope.TRANSIENT }) ===> 매 주입마다 new

@Injectable({ scope: Scope.TRANSIENT })
export class BoardsService {
  qqq(): string {
    return 'Hello World!';
  }
}
