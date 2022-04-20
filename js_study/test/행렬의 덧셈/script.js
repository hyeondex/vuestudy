const arrayOne = [
  [1, 2, 3],
  [4, 5, 6],
];
const arrayTwo = [
  [6, 5, 4],
  [3, 2, 1],
];

function solutionFirst(arrayFirst, arraySecond) {
  // 근본 -> 말해뭐해
  const maximumI = arrayOne.length;
  const maximumJ = arrayOne[0].length;
  let result = new Array();
  for (let i = 0; i < maximumI; i++) {
    let arrayItem = new Array();
    for (let j = 0; j < maximumJ; j++) {
      arrayItem.push(arrayFirst[i][j] + arraySecond[i][j]);
    }
    result.push(arrayItem);
  }
  return result;
}

function solutionSecond(arrayFirst, arraySecond) {
  // MAP -> 추천
  const result = arrayFirst.map((item, i) =>
    item.map((jtem, j) => jtem + arraySecond[i][j])
  );
  return result;
}
function solutionThird(arrayFirst, arraySecond) {
  // REDUCE -> 이런 로직에서는... 개인적으로 추천하지 않음
  const result = arrayFirst.reduce((accumulatorI, item, i) => {
    accumulatorI.push(
      item.reduce((accumulatorJ, jtem, j) => {
        accumulatorJ.push(jtem + arraySecond[i][j]);
        return accumulatorJ;
      }, new Array(0))
    );
    return accumulatorI;
  }, new Array(0));
  return result;
}
console.log(solutionFirst(arrayOne, arrayTwo));
console.log(solutionSecond(arrayOne, arrayTwo));
console.log(solutionThird(arrayOne, arrayTwo));
