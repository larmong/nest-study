import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
    input CreateBoardInput {
        writer: String
        title: String
        contents: String
    }
    type Result {
        id: Int
        title: String
        contents: String
        writer: String
    }
    type Query {
        # fetchBoards: Result # 객체 1개를 의미!
        fetchBoards: [Result] # 배열 안에 객체 1개 이상을 의미!
    }

    type Mutation {
#        createBoard(writer: String, title: String, contents: String): String
        createBoard(createBoardInput: CreateBoardInput!): String
    }
`

const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      // 1. DB에 접속 후, 데이터를 조회 => 데이터를 조회했다고 가정
      const result = [
        { id: 1, writer: "철수", title: "제목입니다!!", contents: "내용이에요!!" },
        { id: 2, writer: "영희", title: "영희입니다!!", contents: "영희가 썼어요!!" },
        { id: 3, writer: "훈이", title: "훈이입니당!!", contents: "훈이입니다!!" },
      ]

      // 2. DB 에서 꺼내온 결과를 브라우저에 응답(response) 주기
      return result
    }
  },

  Mutation: {
    createBoard: (parent, args, context, info) => {
      // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args.createBoardInput.writer)
      console.log(args.createBoardInput.title)
      console.log(args.createBoardInput.contents)

      // 2. DB에 접속 후, 데이터를 저장 => 데이터 저장했다고 가정

      // 3. DB에 저장된 결과를 브라우저에 응답(response) 주기
      return "게시물 등록에 성공하였습니다."
    }
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true // 모든 사이트 cors 허용
  // cors: {origin: "https://naver.com, https://daum.net"}  // 특정 사이트만 cors 허용
})

startStandaloneServer(server)
