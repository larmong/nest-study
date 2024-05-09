import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Board {
    number: String
    writer: String
    title: String
    contents: String
  }
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }
  
  type Mutation {
  # createBoard( writer: String, title: String, contents: String )
    createBoard( createBoardInput: CreateBoardInput! ): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: (parent, args, context, info) => {
      // 1. DB에 접속 후 데이터 조회 => 데이터를 조회했다고 가정
      const result = [
        {
          number: "1",
          writer: "철수",
          title: "안녕하세요! 철수입니다~!",
          contents: "철수에여~~~",
        },
        {
          number: "2",
          writer: "영희",
          title: "영희입니다~!",
          contents: "반가워요!",
        },
        {
          number: "3",
          writer: "훈이",
          title: "안녕하세요!",
          contents: "훈이에여!!!!!!",
        },
      ]

      // 2. DB 에서 꺼내온 결과를 브라우저에 응답(response)
      return result;
    },
  },

  Mutation: {
    createBoard: (parent, args, context, info) => {
      // 1. 브라우저에서 보내준 데이터 확인하기
      console.log(args.createBoardInput.writer)
      console.log(args.createBoardInput.title)
      console.log(args.createBoardInput.contents)

      // 2. DB에 접속 후 데이터를 저장 => 데이터를 저장했다고 가정

      // 3. DB에 저장된 결과를 브라우저에 응답(response)
      return "게시물이 등록되었습니다!";
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,                                                      // 모든 사이트 허용
  // cors: { origin: ["https://naver.com", "https://daum.net"] }   // 특정 사이트 허용
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});