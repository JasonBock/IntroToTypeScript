interface IAnswer<T> {
    Value : T;
}

class GenericAnswer<T> implements IAnswer<T> {
	private _value : T;

	constructor(value : T) {
		this._value = value;
	}

	state() : string {
		return `Your generic answer is ${this._value}`;
	}

	get Value() : T {
		return this._value;    
	} 
}

class ConstraintedAnswer<T extends number> extends GenericAnswer<T> {
	state() : string {
		return `Your constrained answer is ${this.Value}`;
	}
}

class RandomAnswer implements IAnswer<number> {
	private _value : number;

	constructor() {
		this._value = Math.random();
	}

	get Value() : number {
		return this._value;    
	}            
}

class NumberAnswer extends GenericAnswer<number> { }

class Program {
	public static Main() : void {
		let stringAnswer = new GenericAnswer<string>("44");
		Program.PrintAnswer(stringAnswer);

		let constraintedAnswer = new ConstraintedAnswer(47);
		Program.PrintAnswer(constraintedAnswer);

		// Can't do this:
		//let constrainedStringAnswer = new ConstraintedAnswer("47");

		let numberAnswer = new NumberAnswer(43);
		Program.PrintAnswer(numberAnswer);
					
		let newAnswer = Program.CreateNewAnswer(RandomAnswer);
		console.log(newAnswer.Value);

		// Can't do this - no no-arg constructor:
		// Program.CreateNewAnswer(NumberAnswer);

		// But I could do this:
		var answerWithValue = Program.CreateNewAnswerWithValue(NumberAnswer, 22);
		// console.log(`answerWithValue.Value is ${answerWithValue.Value}`);

		// Or this:
		// Program.PrintAnswer(newAnswer);
	}
    
	private static CreateNewAnswer<T>(a : new() => IAnswer<T>) : IAnswer<T> {
		return new a();
	}

	private static CreateNewAnswerWithValue<T>(a : new(v : T) => IAnswer<T>, value : T) : IAnswer<T> {
		return new a(value);
	}

	private static PrintAnswer<T>(answer : GenericAnswer<T>) : T {
		console.log(answer.state());
		return answer.Value;
	}
}

Program.Main();