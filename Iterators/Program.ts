let answers = [41, 44, 47];

console.log("for loop approach...")
for(let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
}

console.log();
console.log("for..in loop approach...")
for(let i in answers) {
    console.log(i);    
}

console.log();
console.log("for..of loop approach...")
for(let i of answers) {
    console.log(i);    
}