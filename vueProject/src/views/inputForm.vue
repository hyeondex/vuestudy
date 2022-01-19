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

              <!-- todo : select disabled  -->
            </td>
          </tr>
          <tr>
            <th>채팅상담 가능 시간</th>
            <td>
              <all-check-box
                :class="{ borderCheck: true, all: true }"
                v-model="
                  inputData.chatAvailableTime.weeklyCheckboxData.allChecked
                "
                :value="
                  inputData.chatAvailableTime.weeklyCheckboxData.allChecked
                "
                :checkedArray.sync="
                  inputData.chatAvailableTime.weeklyCheckboxData.checked
                "
                :checkList="
                  inputData.chatAvailableTime.weeklyCheckboxData.weekly
                "
                :disabled="
                  inputData.chatAvailableTime.weeklyCheckboxData.disabled
                "
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="
                    inputData.chatAvailableTime.weeklyCheckboxData.checked
                  "
                  v-for="(item, idx) in inputData.chatAvailableTime
                    .weeklyCheckboxData.weekly"
                  :key="idx"
                  :value="item.value"
                  :disabled="
                    inputData.chatAvailableTime.weeklyCheckboxData.disabled
                  "
                >
                  <span slot="span">
                    {{ item.name }}
                  </span>
                </check-box>
              </div>
              <div class="time-select-box">
                <form-select
                  v-model="inputData.chatAvailableTime.selectTime1.value"
                  :list="inputData.chatAvailableTime.selectTime1.timeList"
                  :title="inputData.chatAvailableTime.selectTime1.title"
                  :disabled="inputData.chatAvailableTime.selectTime1.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.chatAvailableTime.selectTime1.value"
                  :list="inputData.chatAvailableTime.selectTime1.timeList"
                  :title="inputData.chatAvailableTime.selectTime1.title"
                  :disabled="inputData.chatAvailableTime.selectTime1.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                @change="disabledCheck"
                v-model="
                  inputData.chatAvailableTime.weeklyCheckboxData.disabled
                "
                :value="inputData.chatAvailableTime.weeklyCheckboxData.disabled"
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
                v-model="
                  inputData.videoAvailableTime.weeklyCheckboxData.allChecked
                "
                :value="
                  inputData.videoAvailableTime.weeklyCheckboxData.allChecked
                "
                :checkedArray.sync="
                  inputData.videoAvailableTime.weeklyCheckboxData.checked
                "
                :checkList="
                  inputData.videoAvailableTime.weeklyCheckboxData.weekly
                "
                :disabled="
                  inputData.videoAvailableTime.weeklyCheckboxData.disabled
                "
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="
                    inputData.videoAvailableTime.weeklyCheckboxData.checked
                  "
                  v-for="(item, idx) in inputData.videoAvailableTime
                    .weeklyCheckboxData.weekly"
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
                  v-model="inputData.videoAvailableTime.selectTime1.value"
                  :list="inputData.videoAvailableTime.selectTime1.timeList"
                  :title="inputData.videoAvailableTime.selectTime1.title"
                  :disabled="inputData.videoAvailableTime.selectTime1.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.videoAvailableTime.selectTime1.value"
                  :list="inputData.videoAvailableTime.selectTime1.timeList"
                  :title="inputData.videoAvailableTime.selectTime1.title"
                  :disabled="inputData.videoAvailableTime.selectTime1.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                @change="disabledCheck"
                v-model="
                  inputData.videoAvailableTime.weeklyCheckboxData.disabled
                "
                :value="
                  inputData.videoAvailableTime.weeklyCheckboxData.disabled
                "
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
                v-model="
                  inputData.callAvailableTime.weeklyCheckboxData.allChecked
                "
                :value="
                  inputData.callAvailableTime.weeklyCheckboxData.allChecked
                "
                :checkedArray.sync="
                  inputData.callAvailableTime.weeklyCheckboxData.checked
                "
                :checkList="
                  inputData.callAvailableTime.weeklyCheckboxData.weekly
                "
                :disabled="
                  inputData.callAvailableTime.weeklyCheckboxData.disabled
                "
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="
                    inputData.callAvailableTime.weeklyCheckboxData.checked
                  "
                  v-for="(item, idx) in inputData.callAvailableTime
                    .weeklyCheckboxData.weekly"
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
                  v-model="inputData.callAvailableTime.selectTime1.value"
                  :list="inputData.callAvailableTime.selectTime1.timeList"
                  :title="inputData.callAvailableTime.selectTime1.title"
                  :disabled="inputData.callAvailableTime.selectTime1.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.callAvailableTime.selectTime1.value"
                  :list="inputData.callAvailableTime.selectTime1.timeList"
                  :title="inputData.callAvailableTime.selectTime1.title"
                  :disabled="inputData.callAvailableTime.selectTime1.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                @change="disabledCheck"
                v-model="
                  inputData.callAvailableTime.weeklyCheckboxData.disabled
                "
                :value="inputData.callAvailableTime.weeklyCheckboxData.disabled"
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
                v-model="
                  inputData.faceAvailableTime.weeklyCheckboxData.allChecked
                "
                :value="
                  inputData.faceAvailableTime.weeklyCheckboxData.allChecked
                "
                :checkedArray.sync="
                  inputData.faceAvailableTime.weeklyCheckboxData.checked
                "
                :checkList="
                  inputData.faceAvailableTime.weeklyCheckboxData.weekly
                "
                :disabled="
                  inputData.faceAvailableTime.weeklyCheckboxData.disabled
                "
              >
                <span slot="span">전체</span>
              </all-check-box>
              <div class="weekly-checkbox">
                <check-box
                  :class="{ borderCheck: true }"
                  v-model="
                    inputData.faceAvailableTime.weeklyCheckboxData.checked
                  "
                  v-for="(item, idx) in inputData.faceAvailableTime
                    .weeklyCheckboxData.weekly"
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
                  v-model="inputData.faceAvailableTime.selectTime1.value"
                  :list="inputData.faceAvailableTime.selectTime1.timeList"
                  :title="inputData.faceAvailableTime.selectTime1.title"
                  :disabled="inputData.faceAvailableTime.selectTime1.disabled"
                ></form-select>
                <span>~</span>
                <form-select
                  v-model="inputData.faceAvailableTime.selectTime1.value"
                  :list="inputData.faceAvailableTime.selectTime1.timeList"
                  :title="inputData.faceAvailableTime.selectTime1.title"
                  :disabled="inputData.faceAvailableTime.selectTime1.disabled"
                ></form-select>
              </div>
              <check-box
                :class="{ lineCheckbox: true }"
                @change="disabledCheck"
                v-model="
                  inputData.faceAvailableTime.weeklyCheckboxData.disabled
                "
                :value="inputData.faceAvailableTime.weeklyCheckboxData.disabled"
              >
                <span slot="span">대면상담을 진행하지 않습니다.</span>
              </check-box>
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
          //todo : disabled 어떻게 처리해야되지?
          //placeholder: '이름을 입력하세요',
        },
        tel: {
          value: "01086884617 ",
          disabled: true,
          //placeholder: '전화번호를 입력하세요',
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
          error: "", //todo: validation 체크
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
        chatAvailableTime: {
          weeklyCheckboxData: {
            allChecked: false,
            disabled: false,
            checked: [],
            weekly: [
              { name: "월", value: "mon", disabled: true },
              { name: "화", value: "tue", disabled: false },
              { name: "수", value: "wed", disabled: false },
              { name: "목", value: "thu", disabled: false },
              { name: "금", value: "Fri", disabled: false },
              { name: "토", value: "sat", disabled: false },
              { name: "일", value: "sun", disabled: false },
            ],
          },
          selectTime1: {
            value: "", // select는 배열 X string
            disabled: false,
            selectItem: false,
            title: "상담 시작 시간",
            timeList: [
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
          },
          selectTime2: {
            value: "",
            title: "상담 종료 시간",
            disabled: false,
            timeList: [
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
        },
        callAvailableTime: {
          weeklyCheckboxData: {
            allChecked: false,
            disabled: false,
            checked: [],
            weekly: [
              { name: "월", value: "mon", disabled: true },
              { name: "화", value: "tue", disabled: false },
              { name: "수", value: "wed", disabled: false },
              { name: "목", value: "thu", disabled: false },
              { name: "금", value: "Fri", disabled: false },
              { name: "토", value: "sat", disabled: false },
              { name: "일", value: "sun", disabled: false },
            ],
          },
          selectTime1: {
            value: "", // select는 배열 X string
            disabled: false,
            selectItem: false,
            title: "상담 시작 시간",
            timeList: [
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
          },
          selectTime2: {
            value: "",
            title: "상담 종료 시간",
            disabled: false,
            timeList: [
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
        },
        videoAvailableTime: {
          weeklyCheckboxData: {
            allChecked: false,
            disabled: false,
            checked: [],
            weekly: [
              { name: "월", value: "mon", disabled: true },
              { name: "화", value: "tue", disabled: false },
              { name: "수", value: "wed", disabled: false },
              { name: "목", value: "thu", disabled: false },
              { name: "금", value: "Fri", disabled: false },
              { name: "토", value: "sat", disabled: false },
              { name: "일", value: "sun", disabled: false },
            ],
          },
          selectTime1: {
            value: "", // select는 배열 X string
            disabled: false,
            selectItem: false,
            title: "상담 시작 시간",
            timeList: [
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
          },
          selectTime2: {
            value: "",
            title: "상담 종료 시간",
            disabled: false,
            timeList: [
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
        },
        faceAvailableTime: {
          weeklyCheckboxData: {
            allChecked: false,
            disabled: false,
            checked: [],
            weekly: [
              { name: "월", value: "mon", disabled: true },
              { name: "화", value: "tue", disabled: false },
              { name: "수", value: "wed", disabled: false },
              { name: "목", value: "thu", disabled: false },
              { name: "금", value: "Fri", disabled: false },
              { name: "토", value: "sat", disabled: false },
              { name: "일", value: "sun", disabled: false },
            ],
          },
          selectTime1: {
            value: "", // select는 배열 X string
            disabled: false,
            selectItem: false,
            title: "상담 시작 시간",
            timeList: [
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
          },
          selectTime2: {
            value: "",
            title: "상담 종료 시간",
            disabled: false,
            timeList: [
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
    /* "inputData.weeklyCheckboxData.disabled"(value) {
      // value를 받아서 변경되는 데이터를 아래 모양을 담아? (키, value)
      this.disabledCheck(this.inputData, value);
      //console.log("value", value);
    },
    "inputData.selectTime1.disabled"(value) {
      this.disabledCheck(this.inputData, value);
    },*/
    "inputData.chatAvailableTime.weeklyCheckboxData.disabled"(value) {
      this.disabledCheck("inputData.chatAvailableTime", value);
    },
    "inputData.faceAvailableTime.weeklyCheckboxData.disabled"(value) {
      this.disabledCheck("inputData.faceAvailableTime", value);
    },
    "inputData.callAvailableTime.weeklyCheckboxData.disabled"(value) {
      this.disabledCheck("inputData.callAvailableTime", value);
    },
    "inputData.videoAvailableTime.weeklyCheckboxData.disabled"(value) {
      this.disabledCheck("inputData.videoAvailableTime", value);
    },
  },
  methods: {
    disabledCheck(key, value) {
      if (key === "") {
        this[key].weeklyCheckboxData.allDisabled = value;
        this[key].weeklyCheckboxData.weekly.forEach(
          (el) => (el.disabled = value)
        );
      }
      this[key].selectTime1.disabled = value;
      this[key].selectTime2.disabled = value;
      //console.log(value);
      //inputData.faceAvailableTime.weeklyCheckboxData.disabled;

      /*;
       */
    },

    /*disabledCheck(key, value) {
      //checkbox/select 모두 disabled :true;


    },*/

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
