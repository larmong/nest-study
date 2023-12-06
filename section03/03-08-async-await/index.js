import axios from "axios";

// 1. 비동기방식
function fetchAsync(){
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(`비동기방식::: ${result}`)  // Promise { <pending> }
}

// 2. 동기방식 ::: 함수 중복 선언 문제 있음!
async function fetchSync(){
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(`동기방식::: ${result}`)  // 제대로 된 결과 얻을 수 있음!!
  console.log(`동기방식::: ${result.data.title}`)  // 제대로 된 결과 얻을 수 있음!!
}

// 3. 동기방식 ::: 2번의 문제 해결(화살표 함수)
const newFetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(`동기방식::: ${result}`)  // 제대로 된 결과 얻을 수 있음!!
  console.log(`동기방식::: ${result.data.title}`)  // 제대로 된 결과 얻을 수 있음!!
}

fetchAsync()
fetchSync()
newFetchSync()