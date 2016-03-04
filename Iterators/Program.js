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
for (var _i = 0, answers_1 = answers; _i < answers_1.length; _i++) {
    var i = answers_1[_i];
    console.log(i);
}
//# sourceMappingURL=Program.js.map