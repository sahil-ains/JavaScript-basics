let numbers = [1,2,3];
for (let i=0; i< numbers.length; i++){
    for (let j=0; j<numbers.length; j ++){
        console.log(numbers[i], numbers[j]);
    }
}
let numbers1 = [ 1,2,3,4,5];
for (let i=0; i < numbers1.length; i ++){
    for (let j=0; j < numbers1.length; j ++){
        console.log(numbers1[i], numbers1[j]);
    }
}
let a = [1,2,3];
let b = [3,2,1]; 
for (let i=0 ; i < a.length; i ++){
    for (let j=0; j < b.length; j++){
        if ( a [i]=== b[j]){
            console.log(a[i]);
        }
    }
}
let a1 = [4,5,6];
let b1 = [1,2,3];
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < b1.length; j++) {
        if (a1[i] === b1[j]) {
            console.log(a1[i]);
            break;
        }
    }
}
let numbers2 = [1, 2, 3, 2, 4, 1];

for (let i = 0; i < numbers2.length; i ++) {
    for (let j = i + 1; j < numbers2.length; j ++) {
        if (numbers2[i] === numbers2[j] ){
         console.log("Dupicate:", numbers2[i]);
         break;
      }
    }    
}
let numbers3 = [1, 2, 3, 2, 4, 1];

for (let i = 0; i < numbers3.length; i++) {
  for (let j = i + 1; j < numbers3.length; j++) {
    if (numbers3[i] === numbers3[j]) {
      console.log("Duplicate:", numbers3[i]);
      break;
    }
  }
}
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
         process.stdout.write(arr[i] * arr[j] + " ");

    }
    console.log(" ");
}
let x = [1, 2, 3];
let y = [1, 5, 3];

let count = 0;
for (let i = 0; i < x.length; i ++) {
    if (x[i] === y[i]){
        count++;
    }
}
console.log("matches", count);

let x1 = [7, 8, 9];
let y1 = [1, 8, 3];

let count1 = 0;
for (let i = 0; i < x1.length; i ++) {
    if (x1[i] === y1[i]) {
        count1++;
    }
}
console.log("matches", count1);
