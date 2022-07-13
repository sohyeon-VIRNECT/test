import TestColors from "design-system/src";
import "design-system/src/common/assets/styles/base.css";

interface IFinal {
  for (let i:any in TestColors) {
    i.substring(8): string;
  }
}


let Final = {};
for (let i in TestColors) {
  Final[i.substring(8)] = TestColors[i];
}
console.log(Final);

export default Final;
