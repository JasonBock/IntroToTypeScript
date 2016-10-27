"use strict";

var theAnswer = 44;
{
    var theAnswer = 41;
}

console.log("theAnswer: " + theAnswer);

let anotherAnswer = 45;
{
    let anotherAnswer = 46;
}

console.log("anotherAnswer: " + anotherAnswer);

const simpleAnswer = 41;
// Can't do this:
// simpleAnswer = 42;
console.log("simpleAnswer: " + simpleAnswer);

const finalAnswer : any = { answer: 46 };
// Can't do this:
// finalAnswer = { answer : 444 };
// But I can do this:
finalAnswer.answer = 22;
finalAnswer.really = 47;
console.log("finalAnswer.answer: " + finalAnswer.answer);
console.log("finalAnswer.really: " + finalAnswer.really);

const frozenAnswer = Object.freeze({ answer: 49});
// Can't do this:
// frozenAnswer.really = 47;
// You CAN do this, but it will throw a TypeError at runtime.
// frozenAnswer.answer = 42;
console.log("frozenAnswer.answer: " + frozenAnswer.answer);

type UnionAnswer = string | number;
let stringUnionAnswer : UnionAnswer = "49";
let numberUnionAnswer : UnionAnswer = 49;
// Can't do this
// let arrayUnionAnswer : UnionAnswer = { answer : 49 };

enum Answers { WrongAnswer = 42, RightAnswer };

type StringAnswers = "WrongAnswer" | "RightAnswer";
                       
function printStringAnswers(answer: StringAnswers) {
    console.log(answer);    
}

printStringAnswers("WrongAnswer");
printStringAnswers("RightAnswer");
// Can't do this, you'll get a weird compiler error.
// printStringAnswers("SomeOtherAnswer");

var nonNullValue = "answer";
// Can't do this when "strictNullChecks": true in tsconfig.json
// nonNullValue = null;

var nullOrValue : string | null = "answer";
nullOrValue = null;

console.log("Answers.WrongAnswer: " + Answers.WrongAnswer);
console.log("Answers.RightAnswer: " + Answers.RightAnswer);

function printAnswer(answer : number) : void {
    console.log(answer);
}

console.log("printAnswer(simpleAnswer): ");
printAnswer(simpleAnswer);

function printStructuredAnswer(answer : { answer : number}) {
    console.log(answer.answer);
}

console.log("printStructuredAnswer(finalAnswer): ");
printStructuredAnswer(finalAnswer);

console.log("printStructuredAnswer(frozenAnswer): ");
printStructuredAnswer(frozenAnswer);

// Can't do this:
// console.log("printStructuredAnswer({anser: 44}): ");
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