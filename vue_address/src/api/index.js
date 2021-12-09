import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.juso.go.kr/addrlink/addrLinkApi.do",
});

function getData(val) {
  // val은 변해서 오브젝트로 받아와야하는 값 ( app.vue 참조 ) 이름은 자유
  const basic = {
    // url에서 기본으로 들어가고 변하지 않는 값
    confmKey: "U01TX0FVVEgyMDIxMTEyNjE4MDAwMjExMTk1OTQ=", // 내가 사용하는 키
    resultType: "json", // 결과 타입
  };
  const hap = { ...basic, ...val }; // 위의 basic이랑 val 한줄로 나타내기 위해서 만든거
  return instance.get("", {
    params: hap,
  });
  //instance 리턴할때 url은 이미 가진 상태 >  url 자리 비워도 됨
  //params으로 넘기는건 약속... ! 이야...!
  //params는 hap 변수로 합쳐짐
}

export { getData };
