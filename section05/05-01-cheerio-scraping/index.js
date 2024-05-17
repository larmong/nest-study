import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  // 입력된 메세지: "안녕하세요~ https://www.naver.com 에 방문해주세요!"
  // 1. 입력된 메세지에서 "http"로 시작하는 문장이 있는지 먼저 찾기(.find() 등의 알고리즘 사용하기)
  const url = "https://www.naver.com";

  // 2. "axios.get"으로 요청해서 html 코드 받아오기 ===> 스크래핑
  const result = await axios.get(url);
  // console.log(result); // 받아온 html

  // 3. 스크래핑 결과에서 OG(오픈그래프) 코드를 골라내서 변수에 담기 ===> cheerio 사용
  const $ = cheerio.load(result.data);
  $("meta").each((index, meta) => {
    if ($(meta).attr("property") && $(meta).attr("property").includes("og:")) {
      const key = $(meta).attr("property"); // og:title, og:description, ...
      const value = $(meta).attr("content"); // 네이버, 네이버 메인에서 ~~~
      console.log(`${key}: ${value}`);
    }
  });
};

void createMessage();
