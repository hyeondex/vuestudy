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
  },
  watch: {
    /*checked() {
      this.value
        ? this.checklist.forEach((e) => {
            this.noneCheckList.push(e.value);
          })
        : this.noneCheckList.splice(0, this.noneCheckList.length);
    },*/
    noneCheckList(value){
      console.log(value.length,this.checklist.length)
      this.$emit('change', value.length === this.checklist.length);
    }
  },
  computed: {
    /*checking: {
      get() {
        return this.noneCheckList.length === this.checklist.length;
        // check 담기는 배열 length === 기존 배열 length true false
      },
      set(newValue) {
        /!*this.noneCheckList = newValue
          ? this.checklist.map((el) => el.value)
          : [];*!/
        //console.log(this.value)
        console.log(newValue);
        console.log(this.checked)
        this.$emit('update:noneCheckList',newValue
            ? this.checklist.map((el) => el.value)
            : [])

      },
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
        const val = event.target.checked ? this.checklist.map((el)=>{
          return el.value
        }):[]
        this.$emit("change", event.target.checked);
        this.$emit('update:noneCheckList' , val)
        // console.log(event.target.checked); // checkboxAll의 boolean
      }
    },
  },
};
</script>
