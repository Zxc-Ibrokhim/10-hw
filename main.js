const num1 = prompt("Введите первое число")
const num2 = prompt("Введите второе число")
function showMax(num1, num2) {
  var max = num1 > num2 ? num1 : num2;
  alert("Наибольшее число: " + max);
}
showMax(num1, num2); 

