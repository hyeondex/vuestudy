<template>
  <div class="container">
    <div class="content">
      <h2 class="title-2">
        기본 정보를 입력 후,<br />
        회원가입을 완료해주세요
      </h2>
      <form>
        <table>
          <tr>
            <th>이름</th>
            <td>
              <input-text
                v-model="inputData.name.value"
                :placeholder="inputData.name.placeholder"
                :error="inputData.name.error"
                @test="test"
              />
            </td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>
              <input-text
                v-model="inputData.tel.value"
                :placeholder="inputData.tel.placeholder"
                :error="inputData.tel.error"
              />
            </td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>
              <input-text
                v-model="inputData.tel.value"
                :placeholder="inputData.tel.placeholder"
                :error="inputData.tel.error"
              />
              <p class="desc">아이디는 최소 3글자 이상 입력해주세요.</p>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input-text
                :type="inputData.psw.type"
                v-model="inputData.psw.value"
                :placeholder="inputData.psw.placeholder"
                :error="inputData.psw.error"
              />
              <p class="desc">
                비밀번호는 영문/숫자/특수문자 2가지 이상 조합으로 6~12자이어야
                합니다.
              </p>
            </td>
          </tr>
          <tr>
            <!--todo: 비밀번호 확인 어떻게 하는거지? 비교 해야되는건가? value랑 length 둘다 따로 받아서 만드는건가?  -->
            <th>비밀번호 확인</th>
            <td>
              <input-text
                :type="inputData.pswCheck.type"
                v-model="inputData.pswCheck.value"
                :placeholder="inputData.pswCheck.placeholder"
                :error="inputData.pswCheck.error"
              />
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input-text
                :type="inputData.email.type"
                v-model="inputData.email.value"
                :placeholder="inputData.email.placeholder"
                :error="inputData.email.error"
              />
            </td>
          </tr>
          <tr>
            <th>채팅상담 가능 시간</th>
            <td>
              <div class="left">
                <all-check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.weeklyCheckboxData.allChecked"
                  :value="inputData.weeklyCheckboxData.allChecked"
                  :checkedArray.sync="inputData.weeklyCheckboxData.checked"
                  :checkList="inputData.weeklyCheckboxData.weekly"
                >
                  <span slot="span"> All</span>
                </all-check-box>
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.weeklyCheckboxData.checked"
                  v-for="(item, idx) in inputData.weeklyCheckboxData.weekly"
                  :key="idx"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                  <span slot="span">
                    {{ item.value }}
                  </span>
                </check-box>
              </div>

              <div class="right">
                <form-select
                  v-model="inputData.selectTime1.value"
                  :list="inputData.selectTime1.timeList"
                  :placeholder="inputData.selectTime1.placeholder"
                ></form-select>
              </div>
            </td>
          </tr>
        </table>
      </form>
      <div class="agree-check-wrap">
        <all-check-box
          class="all"
          v-model="inputData.agreeCheckboxData.allChecked"
          :value="inputData.agreeCheckboxData.allChecked"
          :checkedArray.sync="inputData.agreeCheckboxData.checked"
          :checkList="inputData.agreeCheckboxData.list"
        >
          <span slot="span"> 모든 약관에 동의합니다.</span>
        </all-check-box>
        <div class="checklist">
          <check-box
            v-model="inputData.agreeCheckboxData.checked"
            v-for="(item, idx) in inputData.agreeCheckboxData.list"
            :key="idx"
            :value="item.value"
            :required="item.required"
          >
            <!--필수로 들어가야하는 요소 데이터에 boolean 값으로 담아줌 (required) prop으로 자식 컴포넌트에 값 내려주고  -->
            <span slot="span">
              {{ item.value }}
              <span class="mint-60" v-if="item.required">(필수)</span>
            </span>
          </check-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkBox from "@/components/test/checkBox";
import InputText from "@/components/test/inputText";
import allCheckBox from "@/components/test/allCheckBox";
import FormSelect from "@/components/test/formSelect";

export default {
  name: "soohyeon",
  components: {
    FormSelect,
    allCheckBox,
    InputText,
    checkBox,
  },
  data() {
    return {
      inputData: {
        name: {
          value: "이수현",
          disabled: true,
          //todo : disabled 어떻게 처리해야되지?
          //placeholder: '이름을 입력하세요',
        },
        tel: {
          value: "01086884617 ",
          disabled: "disabled",
          //placeholder: '전화번호를 입력하세요',
        },
        psw: {
          type: "password",
          value: "",
          placeholder: "비밀번호를 입력해주세요.",
          error: "",
        },
        pswCheck: {
          type: "password",
          value: "",
          placeholder: "비밀번호를 한번 더 입력해주세요.",
          error: "", //todo: validation 체크
        },
        email: {
          type: "email",
          value: "",
          placeholder: "이메일을 입력해주세요",
          error: "",
        },
        weeklyCheckboxData: {
          allChecked: false,
          allDisabled: false,
          checked: [],
          weekly: [
            { value: "월", disabled: true },
            { value: "화" },
            { value: "수" },
            { value: "목" },
            { value: "금" },
            { value: "토" },
            { value: "일" },
          ],
        },
        selectTime1: {
          value: "", // select는 배열 X string
          placeholder: "상담 시작 시간",
          timeList: [
            { value: "09:00" },
            { value: "10:00" },
            { value: "11:00" },
            { value: "12:00" },
            { value: "13:00" },
            { value: "14:00" },
            { value: "15:00" },
            { value: "16:00" },
            { value: "17:00" },
            { value: "18:00" },
            { value: "19:00" },
            { value: "20:00" },
            { value: "21:00" },
            { value: "22:00" },
            { value: "23:00" },
            { value: "24:00" },
          ],
        },
        selectTime2: {
          value: "",
          placeholder: "상담 종료 시간",

          timeList: [
            { value: "09:00", disabled: true },
            { value: "10:00" },
            { value: "11:00" },
            { value: "12:00" },
            { value: "13:00" },
            { value: "14:00" },
            { value: "15:00" },
            { value: "16:00" },
            { value: "17:00" },
            { value: "18:00" },
            { value: "19:00" },
            { value: "20:00" },
            { value: "21:00" },
            { value: "22:00" },
            { value: "23:00" },
            { value: "24:00" },
          ],
        },
        agreeCheckboxData: {
          allChecked: false,
          checked: [],
          list: [
            { value: "핑글커넥트 이용약관", required: true },
            { value: "개인정보 수집 및 이용 동의", required: true },
            { value: "마케팅/이벤트 정보 수신 동의" },
          ],
        },
      },

      //errorTxt: false,
    };
  },
  methods: {
    test(e) {
      console.log(e);
    },
    // todo : post로 api주소 담아서 보내기
    /*const axios = require('axios')
    axios.post('api주소? ',{
      name : 'balmostory'
    }).then((res)=>{
      console.log(res)
    })*/
  },
};
</script>

<style scoped lang="scss">
table {
  margin-top: 35px;
  th {
    text-align: left;
    font-weight: 700;
    font-size: 14px;
  }
  td {
    padding: 15px 0;
  }
}

.desc {
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  color: $gray-60;
}
</style>
