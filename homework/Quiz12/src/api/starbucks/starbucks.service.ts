import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT })
export class StarbucksService {
  findAll(): string {
    return "스타벅스 커피 목록을 조회합니다";
  }
}
