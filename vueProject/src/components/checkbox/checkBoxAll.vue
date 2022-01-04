<script>
import checkBox from "../checkbox/checkBox";
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
    checking: {
      get() {
        return this.noneCheckList.length === this.checklist.length;
        // check 담기는 배열 length === 기존 배열 length true false
      },
      set(newValue) {
        this.noneCheckList = newValue
          ? this.checklist.map((el) => el.value)
          : [];
        console.log(this.value)

      },
    },
  },
};
</script>
