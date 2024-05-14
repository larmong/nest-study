import { Field, InputType } from "@nestjs/graphql";

// 입력값으로 들어올 때는 @InputType()
// 리턴으로 나갈 때는 @ObjectType()

@InputType()
export class CreateBoardInput {
  @Field(() => String) // graphql
  writer: string;

  @Field(() => String) // graphql
  title: string;

  @Field(() => String) // graphql
  contents: string;
}
