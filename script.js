function sum(...arguments) {
  return arguments.reduce(function (s, num) {
    return s + num;
  }, 0);
}
const curry = (cb, ...arg1) => {
  return function (...arg2) {
    return cb(...arg1, ...arg2);
  };
};
const curriedFunction = curry(sum, 1, 2); // запоминает для вызова sum 2 параметра
console.log(curriedFunction(3, 4)); // выводит 10 т.е. выполняется функционал sum(1,2,3,4)..

const counter = (value = 0) => {
  return {
    inc: () => value++,
    dec: () => value--,
    value: () => value,
  };
};
const iterator = counter();
iterator.inc(); // увеличивает значение на 1
iterator.inc(); // еще на 1
iterator.dec(); // уменьшает на 1

console.log(iterator.value()); // выводит 1
