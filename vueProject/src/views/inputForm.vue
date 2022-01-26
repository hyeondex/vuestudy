<template>
  <div class="container">
    <div class="content">
      <h2 class="title-2">
        기본 정보를 입력 후,<br />
        회원가입을 완료해주세요
      </h2>
      <form action="">
        <table>
          <tr>
            <th>이름</th>
            <td>
              <input-text
                v-model="inputData.name.value"
                :placeholder="inputData.name.placeholder"
                :disabled="inputData.name.disabled"
                :error="inputData.name.error"
              />
            </td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>
              <input-text
                v-model="inputData.tel.value"
                :disabled="inputData.tel.disabled"
                :placeholder="inputData.tel.placeholder"
                :error="inputData.tel.error"
              />
            </td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>
              <input-text
                v-model="inputData.id.value"
                :placeholder="inputData.id.placeholder"
                :error="inputData.id.error"
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
            <!--todo: 비밀번호 확인  -->
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
          <tr class="half-tr">
            <th>이메일</th>
            <td>
              <input-text
                :type="inputData.email.type"
                v-model="inputData.email.value"
                :placeholder="inputData.email.placeholder"
                :error="inputData.email.error"
              />
              <form-select
                v-model="inputData.email.value"
                :value="inputData.email.value"
                :list="inputData.email.emailList"
                :title="inputData.email.title"
              ></form-select>
            </td>
          </tr>
          <tr>
            <th>채팅상담 가능 시간</th>
            <td>
              <all-check-box
                :class="{ borderCheck: true, all: true }"
                v-model="inputData.chatAvailableTime.allChecked"
                :value="inputData.chatAvailableTime.allChecked"
                :checkedArray.sync="inputData.chatAvailableTime.checked"
                :checkList="inputData.weekly"
                :disabled="inputData.chatAvailableTime.disabled"
                :disabledList="inputData.chatAvailableTime.disabledList"
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.chatAvailableTime.checked"
                  v-for="(item, idx) in inputData.weekly"
                  :key="idx"
                  :value="item.value"
                  :disabled="
                    disabledCheckBox(
                      inputData.chatAvailableTime.disabledList,
                      item.value
                    )
                  "
                  :allDisabled="
                    item.disabled || inputData.chatAvailableTime.allDisabled
                  "
                  :disabledList="inputData.chatAvailableTime.disabledList"
                >
                  <!--                  disabled는 무조건 Boolean으로 받는 것-->
                  <!-- 하단으로 넘어가는 값 이렇게 설정함
                  :disabled="
                    disabledCheckBox(
                      inputData.chatAvailableTime.disabledList, //key
                      item.value// value
                    )                  -->
                  <span slot="span">
                    {{ item.name }}
                  </span>
                </check-box>
              </div>
              <div class="time-select-box">
                <form-select
                  v-model="inputData.selectTime.timeStart.value"
                  :list="inputData.selectTime.timeStart"
                  :title="inputData.selectTime.title1"
                  :disabled="inputData.chatAvailableTime.allDisabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.selectTime.timeEnd.value"
                  :list="inputData.selectTime.timeEnd"
                  :title="inputData.selectTime.title2"
                  :disabled="inputData.chatAvailableTime.allDisabled"
                ></form-select>
              </div>

              <check-box
                :class="{ lineCheckbox: true }"
                v-model="inputData.chatAvailableTime.allDisabled"
                :value="inputData.chatAvailableTime.allDisabled"
              >
                <span slot="span">화상상담을 진행하지 않습니다.</span>
              </check-box>
            </td>
          </tr>
          <tr>
            <th>화상상담 가능 시간</th>
            <td>
              <all-check-box
                :class="{ borderCheck: true, all: true }"
                v-model="inputData.videoAvailableTime.allChecked"
                :value="inputData.videoAvailableTime.allChecked"
                :checkedArray.sync="inputData.videoAvailableTime.checked"
                :checkList="inputData.weekly"
                :disabled="inputData.videoAvailableTime.allDisabled"
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.videoAvailableTime.checked"
                  v-for="(item, idx) in inputData.weekly"
                  :key="idx"
                  :value="item.value"
                  :alldisabled="inputData.videoAvailableTime.allDisabled"
                >
                  <span slot="span">
                    {{ item.name }}
                  </span>
                </check-box>
              </div>
              <div class="time-select-box">
                <form-select
                  v-model="inputData.selectTime.timeStart.value"
                  :list="inputData.selectTime.timeStart"
                  :title="inputData.selectTime.title1"
                  :disabled="inputData.videoAvailableTime.allDisabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.selectTime.timeEnd.value"
                  :list="inputData.selectTime.timeEnd"
                  :title="inputData.selectTime.title2"
                  :disabled="inputData.videoAvailableTime.allDisabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                v-model="inputData.videoAvailableTime.allDisabled"
                :value="inputData.videoAvailableTime.allDisabled"
              >
                <span slot="span">화상상담을 진행하지 않습니다.</span>
              </check-box>
            </td>
          </tr>
          <!--
          <tr>
            <th>화상상담 가능 시간</th>
            <td>
              <all-check-box
                :class="{ borderCheck: true, all: true }"
                v-model="inputData.callAvailableTime.allChecked"
                :value="inputData.callAvailableTime.allChecked"
                :disabled="inputData.callAvailableTime.allDisabled"
                :checkedArray.sync="inputData.callAvailableTime.checked"
                :checkList="inputData.weekly"
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.callAvailableTime.checked"
                  v-for="(item, idx) in inputData.weekly"
                  :key="idx"
                  :value="item.name"
                  :disabled="item.disabled || item.ddd"
                >
                  <span slot="span">
                    {{ item.name }}
                  </span>
                </check-box>
              </div>
              <div class="time-select-box">
                <form-select
                  v-model="inputData.selectTime1.value"
                  :list="inputData.selectTime1.timeList"
                  :title="inputData.selectTime1.title"
                  :disabled="inputData.callAvailableTime.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.selectTime2.value"
                  :list="inputData.selectTime2.timeList"
                  :title="inputData.selectTime2.title"
                  :disabled="inputData.callAvailableTime.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                v-model="inputData.callAvailableTime.disabled"
                :value="inputData.callAvailableTime.disabled"
              >
                <span slot="span">전화상담을 진행하지 않습니다.</span>
              </check-box>
            </td>
          </tr>
          <tr>
            <th>대면상담 가능 시간</th>
            <td>
              <all-check-box
                :class="{ borderCheck: true, all: true }"
                v-model="inputData.faceAvailableTime.allChecked"
                :value="inputData.faceAvailableTime.allChecked"
                :disabled="inputData.faceAvailableTime.allDisabled"
                :checkedArray.sync="inputData.faceAvailableTime.checked"
                :checkList="inputData.weekly"
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="inputData.faceAvailableTime.checked"
                  v-for="(item, idx) in inputData.weekly"
                  :key="idx"
                  :value="item.name"
                  :disabled="item.disabled"
                >
                  <span slot="span">
                    {{ item.name }}
                  </span>
                </check-box>
              </div>
              <div class="time-select-box">
                <form-select
                  v-model="inputData.selectTime1.value"
                  :list="inputData.selectTime1.timeList"
                  :title="inputData.selectTime1.title"
                  :disabled="inputData.faceAvailableTime.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.selectTime2.value"
                  :list="inputData.selectTime2.timeList"
                  :title="inputData.selectTime2.title"
                  :disabled="inputData.faceAvailableTime.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                v-model="inputData.disabled"
                :value="inputData.faceAvailableTime.disabled"
              >
                <span slot="span">대면상담을 진행하지 않습니다.</span>
              </check-box>
            </td>
          </tr>-->
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
              {{ item.name }}
              <span class="mint-60" v-if="item.required">(필수)</span>
            </span>
          </check-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkBox from "../components/form/checkBox";
import InputText from "../components/form/inputText";
import allCheckBox from "../components/form/allCheckBox";
import formSelect from "../components/form/formSelect";

export default {
  name: "inputForm",
  components: {
    formSelect,
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
          //todo : 입력되어야할 폼이 입력되지 않았을 때 넘어가는 버튼 disabled
          placeholder: "이름을 입력하세요",
        },
        tel: {
          value: "01086884617 ",
          disabled: true,
          placeholder: "전화번호를 입력하세요",
        },
        id: {
          value: "",
          placeholder: "아이디를 입력하세요",
          error: "",
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
          error: "",
          //todo: validation 체크
        },
        email: {
          type: "email",
          value: "",
          placeholder: "이메일을 입력해주세요",
          error: "",
          title: "선택",
          emailList: [
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
            { value: "email", name: "naver.com" },
          ],
        },
        weekly: [
          { name: "월", value: "mon", disabled: false },
          { name: "화", value: "tue", disabled: true },
          { name: "수", value: "wed", disabled: false },
          { name: "목", value: "thu", disabled: false },
          { name: "금", value: "Fri", disabled: false },
          { name: "토", value: "sat", disabled: false },
          { name: "일", value: "sun", disabled: false },
        ],
        selectTime: {
          value: "", // select는 배열 X string
          selectItem: false,
          title1: "상담 시작 시간",
          title2: "상담 종료 시간",
          timeStart: [
            { value: "0", name: "09:00" },
            { value: "1", name: "10:00" },
            { value: "2", name: "11:00" },
            { value: "3", name: "12:00" },
            { value: "4", name: "13:00" },
            { value: "5", name: "14:00" },
            { value: "6", name: "15:00" },
            { value: "7", name: "16:00" },
            { value: "8", name: "17:00" },
            { value: "9", name: "18:00" },
            { value: "10", name: "19:00" },
            { value: "11", name: "20:00" },
            { value: "12", name: "21:00" },
            { value: "13", name: "22:00" },
            { value: "14", name: "23:00" },
            { value: "15", name: "24:00" },
          ],
          timeEnd: [
            { value: "0", name: "09:00", disabled: true },
            { value: "1", name: "10:00" },
            { value: "2", name: "11:00" },
            { value: "3", name: "12:00" },
            { value: "4", name: "13:00" },
            { value: "5", name: "14:00" },
            { value: "6", name: "15:00" },
            { value: "7", name: "16:00" },
            { value: "8", name: "17:00" },
            { value: "9", name: "18:00" },
            { value: "10", name: "19:00" },
            { value: "11", name: "20:00" },
            { value: "12", name: "21:00" },
            { value: "13", name: "22:00" },
            { value: "14", name: "23:00" },
            { value: "15", name: "24:00" },
          ],
        },
        chatAvailableTime: {
          allChecked: false,
          allDisabled: false,
          disabled: false,
          disabledList: ["mon", "tue", "wed"],
          checked: [],
          selected: "",
          selected2: "",
        },
        callAvailableTime: {
          allChecked: false,
          allDisabled: false,
          disabled: false,
          checked: [],
          selected: "",
          selected2: "",
        },
        videoAvailableTime: {
          allChecked: false,
          allDisabled: false,
          disabled: false,
          disabledList: ["mon", "tue", "wed"],
          checked: [],
          selected: "",
          selected2: "",
        },
        faceAvailableTime: {
          allChecked: false,
          allDisabled: false,
          disabled: false,
          checked: [],
          selected: "",
          selected2: "",
        },

        agreeCheckboxData: {
          allChecked: false,
          checked: [],
          list: [
            { value: "list1", name: "핑글커넥트 이용약관", required: true },
            {
              value: "list2",
              name: "개인정보 수집 및 이용 동의",
              required: true,
            },
            { value: "list3", name: "마케팅/이벤트 정보 수신 동의" },
          ],
        },
      },

      //errorTxt: false,
    };
  },
  watch: {
    //watch에서는 데이터를 가져와서 데이터의 속성을 체킹하는데 그 체킹하는걸 데이터안에 데이터~~ 이런구조니까 "" 감아주면 됨
    /* "inputData.disabled"(value) {
      // value를 받아서 변경되는 데이터를 아래 모양을 담아? (키, value)
      this.disabledCheck(this.inputData, value);
    },*/

    "inputData.selectTime1.disabled"(value) {
      this.disabledCheck(this.inputData, value);
    },

    "inputData.chatAvailableTime.allDisabled"(val) {
      this.disabledCheck(val, this.inputData.chatAvailableTime);
    },
    "inputData.videoAvailableTime.disabled"(val) {
      this.disabledCheck(val, this.inputData.videoAvailableTime);
    },
    /* "inputData.faceAvailableTime.disabled"(value) {
      this.disabledCheck("faceAvailableTime", value);
    },
    "inputData.videoAvailableTime.disabled"(value) {
      this.disabledCheck("videoAvailableTime", value);
    },
    "inputData.chatAvailableTime.allDisabled"(value) {
      this.disabledCheck("chatAvailableTime", value);
    },*/
  },
  computed: {},
  methods: {
    disabledCheckBox(val, item) {
      const state = val.some((el) => el === item);
      // console.log(state);
      return state;
    },
    disabledCheck(val, list) {
      console.log(val);
      if (val) {
        list.disabledList = [];
        this.inputData.weekly.forEach((el) => {
          list.disabledList.push(el.value);
        });
      } else {
        list.disabledList = [];
      }
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

<style scoped>
.container {
  width: 950px;
  margin: 50px auto;
}
table {
  margin: 35px auto 0;
}
th {
  min-width: 236px;
  padding-top: 25px;
  vertical-align: top;
  text-align: left;
  font-weight: 700;
  font-size: 14px;
}
td {
  width: 708px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}

.weekly-checkbox {
  display: inline-flex;
}
.time-select-box {
  display: flex;
  align-items: center;
}
.time-select-box span {
  margin: 0 10px;
}
.desc {
  flex: 1 0 100%;
  margin-top: 10px;
  font-size: 12px;
  line-height: 18px;
  color: $gray-60;
}
.lineCheckbox {
  margin-top: 10px;
  padding-left: 24px;
}
.lineCheckbox:before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 18px;
  height: 18px;
  background: url("../assets/images/ic-checkbox-off-nomal-18.svg") no-repeat 50%
    50%/100%;
}
.lineCheckbox.checked:before {
  background: url("../assets/images/ic-checkbox-on-nomal-18.svg") no-repeat 50%
    50%/100%;
}

[class$="box"] + [class$="box"] {
  margin-left: 10px;
  flex: 0 0 50%;
}
[class$="box"] + .time-select-box {
  flex: auto;
}
</style>
