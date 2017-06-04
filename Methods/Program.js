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
// But I can do this:
finalAnswer.answer = 22;
finalAnswer.really = 47;
console.log("finalAnswer.answer: " + finalAnswer.answer);
console.log("finalAnswer.really: " + finalAnswer.really);
var frozenAnswer = Object.freeze({ answer: 49 });
// Can't do this:
// frozenAnswer.really = 47;
// You can't do this either as of TS 2.1 due to mapped types :)
// https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types
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
// Can't do this.
// printStringAnswers("SomeOtherAnswer");
var nonNullValue = "answer";
// Can't do this when "strictNullChecks": true in tsconfig.json
// nonNullValue = null;
var nullOrValue = "answer";
nullOrValue = null;
console.log("Answers.WrongAnswer: " + Answers.WrongAnswer);
console.log("Answers.RightAnswer: " + Answers.RightAnswer);
var tupleAnswer = ["The Answer", 49];
console.log("tupleAnswer: " + tupleAnswer[0] + ", " + tupleAnswer[1]);
var stringAnswer = tupleAnswer[0], intAnswer = tupleAnswer[1];
console.log("Destructured tupleAnswer: " + stringAnswer + ", " + intAnswer);
var dynamicAnswer = { answer: 39, name: "Destructure THIS" };
var myAnswer = dynamicAnswer.answer;
console.log("Destructured dynamicAnswer: " + myAnswer);
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
        answers[_i] = arguments[_i];
    }
    console.log(answers.join(", "));
}
console.log("printAnswers(48, 40, 45): ");
printAnswers(48, 40, 45);
var lambdaAnswer = function (value) { return console.log("The given answer is " + value); };
lambdaAnswer(444);
//# sourceMappingURL=Program.js.map