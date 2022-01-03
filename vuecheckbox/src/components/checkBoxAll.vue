<script>
import checkBox from "@/components/checkBox";
export default {
  name: "checkBoxAll",
  extends: checkBox,
  props: {
    noneCheckList: {
      type: Array,
    },
    checklist: {
      type: Array,
    },
  }, // 부모한테 받아야하는 값만 가져오기

  watch: {
    checked() {
      this.value
        ? this.checklist.forEach((e) => {
            this.noneCheckList.push(e.value);
          })
        : this.noneCheckList.splice(0, this.noneCheckList.length);
    },
  },
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
        return this.noneCheckList.length === this.checklist.length;
        // check 담기는 배열 length === 기존 배열 length true false
      },
      set(newValue) {
        this.noneCheckList = newValue
          ? this.checklist.map((el) => el.value)
          : [];
      },
    },
  },
};
</script>
