import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.juso.go.kr/addrlink/addrLinkApi.do",
});

function getData(val) {
  // val: object로 받아오는 값 ( app.vue 참조 ), 이름자유
  const basic = {
    // 필수 값/url 반영/변하지 않는 값/
    confmKey: "U01TX0FVVEgyMDIxMTEyNjE4MDAwMjExMTk1OTQ=", // 내가 사용하는 키 (발급받은 키)
    resultType: "json", // 결과 타입 (json으로 받아야함)
  };
  const hap = { ...basic, ...val }; // 전개 연산자로 두 객체를 묶어서 반환해줌
  return instance.get("", {
    params: hap,
  });
  //instance return hap에 url 포함 ( url 기재 X)
  //url에서 넘길 떄는 params 넘겨야 함 => hap에 넘길 params 준비 됨.
}

export { getData };
