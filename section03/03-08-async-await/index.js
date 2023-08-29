import axios from "axios";


// 1. 비동기 방식
function fetchAsync(){
  const result = axios.get("https://koreanjson.com/posts/1")
  console.log(`비동기방식: ${result}`)  // Promise { <pending> }
}

fetchAsync()




// 2. 동기 방식

// 함수 중복 선언 문제 있음 => 화살표 함수로 변경
// async function fetchSync(){
//   const result = await axios.get("https://koreanjson.com/posts/1")
//    console.log(`동기방식: ${result}`)  // header와 body 모두 받아 옴
//    console.log(`동기방식: ${result.data}`)  // JSON 데이터 받아 옴
// }

const fetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1")
  console.log(`동기방식: ${result}`)  // header와 body 모두 받아 옴
  console.log(`동기방식: ${result.data}`)  // JSON 데이터 받아 옴
}

void fetchSync()
