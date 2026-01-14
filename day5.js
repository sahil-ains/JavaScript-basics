let numbers = [5, 12, 8, 20, 3, 15];
let count = 0;
for ( i = 0; i< numbers.length; i++){
 if ( numbers[i] > 10) {
        count ++;
 }
}
console.log(`greater then 10: ${count}`);
let numbers1 = [1,2,3,4,5,6];
let evensum = 0;
for (let i = 0; i < numbers1.length; i++){
    if (numbers1[i] % 2 === 0){
         evensum += numbers1[i];
    }
}
console.log(`sum of even count is ${evensum} `);
let numbers2= [9, 3, 7, 1, 5];
let smallest =numbers2[0];
for (let i = 0; i<numbers2.length; i++){
    if(numbers2[i] < smallest){
        smallest = numbers2[i];
    }
}
console.log(`smallest is ${smallest}`);
let marks = [45, 78, 30, 90, 66, 40];
let passcount = 0;
let failcount = 0;

for (let i = 0; i < marks.length; i++){
    if (marks[i] >= 50){
        console.log("pass");
        passcount ++;
    } else {
        console.log("fail");
        failcount ++;
    }
}
console.log(`pass ${passcount}, fail${failcount}`);
let numbers3 = [10, 15, 21, 28, 9];
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] % 7 === 0) {
    console.log(`First divisible by 7 is ${numbers3[i]}`);
    break;
  }
}

let numbers4 = [10, 15, 28, 30, 9];
for (let i = 0; i <numbers4.length; i++){
    if (numbers4[i] % 7 === 0) {
        console.log(`first divisible by 7 is:${numbers4[i]}`);
        break;
    }
}