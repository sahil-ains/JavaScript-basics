for (let i = 1; i <=5; i++) {
    for (let j = 1; j<=5; j++) {
        process.stdout.write("*");
    }
    console.log("");  
}
for (let i = 1; i <= 4; i++){
    for (let j = 1; j <= 4; j++){
        process.stdout.write("*");
    }
    console.log("")
}
for ( let i = 1; i <= 3; i++){
    for ( let j = 1; j <= 3; j++){
  process.stdout.write(j + " ");
    }
      console.log("");
}
for ( let i = 1; i <= 4; i++){
    for (let j = 1; j <=4; j++){
        process.stdout.write(j +  " ");
    }
    console.log(" ");
}
for ( let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log();
}
for ( let i = 5; i >=1 ; i --) {
    for ( let j = 1; j <= i ; j++) {
        process.stdout.write("*");
    }
    console.log();
}
for ( let i = 1; i <= 3 ; i ++) {
    for ( let j = 1; j <=3 ; j++) {
        process.stdout.write (i * j + " ");
    }
    console.log(" ");
}
for ( let i = 1; i <=10; i ++) {
    for (let j = 1; j <= 10; j ++) {
        process.stdout.write(i * j + " ");
    }
    console.log("");
}