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
// You can't do this either as of TS 2.1 due to mapped types :)
// https://blog.mariusschulz.com/2017/01/20/typescript-2-1-mapped-types
// frozenAnswer.answer = 42;
console.log("frozenAnswer.answer: " + frozenAnswer.answer);

type UnionAnswer = string | number;
let stringUnionAnswer : UnionAnswer = "49";
let numberUnionAnswer : UnionAnswer = 49;
// Can't do these
// let dateUnionAnswer : UnionAnswer = new Date(2001, 1, 1);
// let arrayUnionAnswer : UnionAnswer = { answer : 49 };

enum Answers { WrongAnswer = 42, RightAnswer };

console.log("Answers.WrongAnswer: " + Answers.WrongAnswer);
console.log("Answers.RightAnswer: " + Answers.RightAnswer);

type StringAnswers = "WrongAnswer" | "RightAnswer";
                       
function printStringAnswers(answer: StringAnswers) {
    console.log(answer);    
}

printStringAnswers("WrongAnswer");
printStringAnswers("RightAnswer");
// Can't do this.
// printStringAnswers("SomeOtherAnswer");

let nonNullValue = "answer";
// Can't do this when "strictNullChecks": true in tsconfig.json,
// or just set "strict" to true.
// nonNullValue = null;

let nullOrValue : string | null = "answer";
// console.log(nullOrValue.length);
nullOrValue = null;
// The "non-null assertion operator"
// console.log(nullOrValue!.length);

let tupleAnswer : [string, number] = ["The Answer", 49];
console.log("tupleAnswer: " + tupleAnswer[0] + ", " + tupleAnswer[1]);
let [ stringAnswer, intAnswer ] = tupleAnswer;
console.log("Destructured tupleAnswer: " + stringAnswer + ", " + intAnswer);

let dynamicAnswer = { answer: 39, name: "Destructure THIS" };
let { answer: myAnswer } = dynamicAnswer;
console.log("Destructured dynamicAnswer: " + myAnswer);

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

let nominalAnswer = {answer: 22, name: "name"};
console.log("printStructuredAnswer(nominalAnswer): ");
printStructuredAnswer(nominalAnswer);

// Can't do this:
// console.log("printStructuredAnswer({anser: 44}): ");
printStructuredAnswer({answer: 44});

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

let lambdaAnswer = (value : number) => console.log("The given answer is " + value);
lambdaAnswer(444);