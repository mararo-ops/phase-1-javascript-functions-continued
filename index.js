
function saturdayFun(money ="roller-skate") {
    return(`This Saturday, I want to ${money}!`);
}
console.log (saturdayFun());
const mondayWork = function (mula = "go to the office") {
    return (`This Monday, I will ${mula}.`)
}
mondayWork("work from home");

function wrapAdjective(love) {
    return function(hate) {
      return `You are ${love}${hate}${love}!`;
    };
  }
  
  let result = wrapAdjective('*');
  let emphatic = result("a hard worker");
  console.log(emphatic);