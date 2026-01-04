let fruits = ["apple", "banana", "mango",];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let fruits1 = ["fig", "orange", "lime", "watermelon",];
for (let i = 0; i <fruits1.length; i++) {
    console.log(fruits1[i]);
}
let numbers = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum is " + sum);
let numbers0 = [4, 6, 8, 10];
let sum0 = 0;
for (let i = 0; i < numbers0.length; i++) {
    sum0 += numbers0[i];
}
console.log("sum is" + sum0);
let numbers1 = [3, 7, 2, 9, 5];
for (let i = 3; i < numbers1.length; i++) {

}
let numbers3 = [3, 7, 2, 9, 5];
let largest = numbers3[0];
for (let i = 1; i < numbers3.length; i++) {
  if (numbers3[i] > largest) {
    largest = numbers3[i];
  }
}
console.log("Largest is", largest);
let n = [-10, -3, -50, -1];
let largest1 = n[0];
for (let i = 1; i< n.length; i++) {
    largest1 =n[i];
}
console.log("largest is", largest1);
let n1 = [-12, -3, -52, -2];
let largest2 = n[0];
for (i = 1; i<n1.length; i++) {
    largest2 =n1[i];
}
console.log("largest is", largest2)
let numbers4 = [1, 2, 3, 4, 5, 6];
let EventCount = 0;
for (i =0; i<numbers4.length; i++) {
    if (numbers4[i] % 2 === 0){
        EventCount++;
    }
}
console.log("even count is" + EventCount);