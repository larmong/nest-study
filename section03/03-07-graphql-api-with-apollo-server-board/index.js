import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// schema
const typeDefs = `#graphql
#  input CreateBoardInput {
#    id: Int
#    writer: String
#    title: String
#    contents: String
#  }
#
#  type ResultType {
#    id: Int
#    writer: String
#    title: String
#    contents: String
#  }
  
  type Query {
    # fetchBoards: ResultType  # 객체 1개를 의미!
    fetchBoards: [ResultType]  # 배열 안에 객체 1개 이상을 의미!
  }
  type Mutation {
    # createBoard(id: Int, writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// api
const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      // 1. DB에 접속 후 데이터를 조회 => 데이터를 조회했다고 가정
      const result = [
        { id: 1, writer: "철수", title: "111 제목", contents: "111 내용" },
        { id: 2, writer: "영희", title: "222 제목", contents: "222 내용" },
        { id: 3, writer: "훈이", title: "333 제목", contents: "333 내용" },
      ];

      // 2. DB에서 꺼내온 데이터를 응답(res)
      return result;
    },
  },

  Mutation: {
    createBoard: (_, args) => {
      // 1. 브라우저에서 보내 준 데이터 확인
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);
      console.log("===========================");
      console.log(args.phone);

      // 2. DB에 접속 후 데이터를 저장 => 데이터 저장했다고 가정

      // 2. DB에 저장된 결과를 브라우저에 응답(res)
      return "게시물 등록에 성공하였습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 모두 허용
  // cors: {origin: "https://naver.com"}  // 특정 사이트만 지정하고 싶을 때
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
