"use strict";
var theAnswer = 44;
{
    var theAnswer = 41;
}
console.log("theAnswer: " + theAnswer);
var anotherAnswer = 45;
{
    var anotherAnswer_1 = 46;
}
console.log("anotherAnswer: " + anotherAnswer);
var simpleAnswer = 41;
// Can't do this:
// simpleAnswer = 42;
console.log("simpleAnswer: " + simpleAnswer);
var finalAnswer = { answer: 46 };
// Can't do this:
// finalAnswer = { answer : 444 };
finalAnswer.really = 47;
console.log("finalAnswer.answer: " + finalAnswer.answer);
console.log("finalAnswer.really: " + finalAnswer.really);
var frozenAnswer = Object.freeze({ answer: 49 });
// Can't do this:
// frozenAnswer.really = 47;
// You CAN do this, but it will throw a TypeError at runtime.
// frozenAnswer.answer = 42;
console.log("frozenAnswer.answer: " + frozenAnswer.answer);
var stringUnionAnswer = "49";
var numberUnionAnswer = 49;
// Can't do this
// let arrayUnionAnswer : UnionAnswer = { answer : 49 };
var Answers;
(function (Answers) {
    Answers[Answers["WrongAnswer"] = 42] = "WrongAnswer";
    Answers[Answers["RightAnswer"] = 43] = "RightAnswer";
})(Answers || (Answers = {}));
;
function printStringAnswers(answer) {
    console.log(answer);
}
printStringAnswers("WrongAnswer");
printStringAnswers("RightAnswer");
// Can't do this, you'll get a weird compiler error.
//printStringAnswers("SomeOtherAnswer");
console.log("Answers.WrongAnswer: " + Answers.WrongAnswer);
console.log("Answers.RightAnswer: " + Answers.RightAnswer);
function printAnswer(answer) {
    console.log(answer);
}
console.log("printAnswer(simpleAnswer): ");
printAnswer(simpleAnswer);
function printStructuredAnswer(answer) {
    console.log(answer.answer);
}
console.log("printStructuredAnswer(finalAnswer): ");
printStructuredAnswer(finalAnswer);
console.log("printStructuredAnswer(frozenAnswer): ");
printStructuredAnswer(frozenAnswer);
// Can't do this:
// console.log("printStructuredAnswer({anser: 44}): ");
// printStructuredAnswer({anser: 44});
function printAnswerWithName(answer, name) {
    if (name === void 0) { name = "Joe"; }
    console.log(answer + ", " + name);
}
console.log("printAnswerWithName(48): ");
printAnswerWithName(48);
console.log("printAnswerWithName(48, \"Jane\"): ");
printAnswerWithName(48, "Jane");
function printAnswers() {
    var answers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        answers[_i - 0] = arguments[_i];
    }
    console.log(answers.join(", "));
}
console.log("printAnswers(48, 40, 45): ");
printAnswers(48, 40, 45);
//# sourceMappingURL=Program.js.map