<script>
import checkBox from "../checkbox/checkBox";
export default {
  name: "checkBoxAll",
  extends: checkBox,
  props: {
    putCheckedList: {
      type: Array,
    },
    checklist: {
      type: Array,
    },
  },
  watch: {
    /*checked() {
      this.value
        ? this.checklist.forEach((e) => {
            this.putCheckedList.push(e.value);
          })
        : this.putCheckedList.splice(0, this.putCheckedList.length);
    },*/
    putCheckedList(value){
      this.$emit('change', value.length === this.checklist.length);
    }
  },
  computed: {
    /*checking: {
       // 기존에 사용하던 checking을 덮어씌워서 삭제
    },*/
  },

  methods: {
    checkChange(event) {

      if (!this.checkType) {
        const idx = this.checked.indexOf(this.value);
        if (idx === -1) {
          this.checked.push(this.value);
          //console.log("push");
        } else {
          this.checked.splice(idx, 1);
          //console.log("splice ");
        }
        this.$emit("change", this.checked); // checked 된 배열
      } else {
        console.log('실행')
        const val = event.target.checked ? this.checklist.map((el)=>{
          return el.value
        }):[]
        this.$emit("change", event.target.checked);
        this.$emit('update:putCheckedList' , val)
        console.log(event.target.checked); // checkboxAll의 boolean
      }
    },
  },
};
</script>
