/* 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 * Generators are functions which can be exited and later re-entered.
 * an iterator object for the function is returned instead. When the iterator's 
 * next() method is called, the generator function's body is executed until the first yield expression, 
 */


function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log("Generator's values: ");
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
