"use strict";

var theAnswer = 44;
console.log("theAnswer: " + theAnswer);

let anotherAnswer = 45;
console.log("anotherAnswer: " + anotherAnswer);

const simpleAnswer = 41;
// Can't do this:
// simpleAnswer = 42;
console.log("simpleAnswer: " + simpleAnswer);

const finalAnswer : any = { answer: 46 };
finalAnswer.really = 47;
console.log("finalAnswer.answer: " + finalAnswer.answer);
console.log("finalAnswer.really: " + finalAnswer.really);

const frozenAnswer = Object.freeze({ answer: 49});
// Can't do this:
// frozenAnswer.really = 47;
console.log("frozenAnswer.answer: " + frozenAnswer.answer);

enum Answers { WrongAnswer = 42, RightAnswer };

console.log("Answers.WrongAnswer: " + Answers.WrongAnswer);
console.log("Answers.RightAnswer: " + Answers.RightAnswer);

function printAnswer(answer : number) {
    console.log(answer);
}

console.log("printAnswer(simpleAnswer): ");
printAnswer(simpleAnswer);

function printStructuredAnswer(answer : { answer: number }) {
    console.log(answer.answer);
}

console.log("printStructuredAnswer(finalAnswer): ");
printStructuredAnswer(finalAnswer);

console.log("printStructuredAnswer(frozenAnswer): ");
printStructuredAnswer(frozenAnswer);

// Can't do this:
// console.log("printStructuredAnswer(frozenAnswer): ");
// printStructuredAnswer({anser: 44});

function printAnswerWithName(answer: number, name = "Joe") {
    console.log(`${answer}, ${name}`);    
}

console.log("printAnswerWithName(48): ");
printAnswerWithName(48);

console.log("printAnswerWithName(48, \"Jane\"): ");
printAnswerWithName(48, "Jane");

function printAnswers(...answers: number[]) {
    console.log(answers.join(", "));
}

console.log("printAnswers(48, 40, 45): ");
printAnswers(48, 40, 45);

function printThreeAnswers(answer1: number, answer2: number, answer3: number) {
    console.log(answer1, answer2, answer3);
}