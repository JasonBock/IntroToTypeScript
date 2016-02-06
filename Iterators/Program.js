var answers = [41, 44, 47];
console.log("for loop approach...");
for (var i = 0; i < answers.length; i++) {
    console.log(answers[i]);
}
console.log();
console.log("for..in loop approach...");
for (var i in answers) {
    console.log(i);
}
console.log();
console.log("for..of loop approach...");
for (var _i = 0; _i < answers.length; _i++) {
    var i = answers[_i];
    console.log(i);
}
//# sourceMappingURL=Program.js.map