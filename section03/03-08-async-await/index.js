import axios from "axios";

// 1. 비동기방식
function fetchAsync(){
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(`비동기방식: ${result}`)  // Promise { <pending> }
}
fetchAsync();

// 2. 동기방식 => 중복선언문제(화살표 함수로 변경)
// async function fetchSync(){
//   const result = await axios.get("https://koreanjson.com/posts/1");
//   console.log(`동기방식: ${JSON.stringify(result.data)}`)  // 제대로 된 결과 => { title: "..." }
//   console.log(`동기방식: ${result.data.title}`)
// }

const fetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(`동기방식: ${JSON.stringify(result.data)}`)  // 제대로 된 결과 => { title: "..." }
  console.log(`동기방식: ${result.data.title}`)
}

fetchSync();