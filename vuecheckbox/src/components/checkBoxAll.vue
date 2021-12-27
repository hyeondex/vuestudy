<script>
import checkBox from "@/components/checkBox";
export default {
  name: "checkBoxAll",
  extends: checkBox,
  props: {
    //부모한테 받은 data
    checked: {
      // 부모한테서 받은 V-MODEL
      type: [Boolean, Array],
    },
    value: {
      type: String,
    },
    checkedList: {
      type: Array,
    },
  }, // 부모한테 받아야하는 값만 가져오기
  computed: {
    /* checkType() {
      return typeof this.checked === "boolean";
    },*/
    // data관련
    // cache(잠시저장)을 하는 기능있음 로컬 장소에 파일을 미리 받아 두는 역할
    // get(){} 값을 가져오는거
    // set(){} 그 값으로 설정하는거
    checking: {
      get() {
        if (this.checkType) {
          console.log(this.checked);
          return this.checked;
        }
        return this.value;
        //value에 들어가는 값 1.체크 하나일때 boolean 2.checked 배열
      },
      set(newValue) {
        let test2 = this.checkedList.push(...newValue);
        this.checked = this.checked.length === this.checkedList.length;
        console.log(test2);
      },
    },
  },
};
</script>
