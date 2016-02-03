module Messages {
	export const Answer = "The answer is";
}

interface IAnswer {
	state() : string;
}

class TheAnswer implements IAnswer {
	private _value : number;

	// You can't do this.
	/*
	constructor() {
		this.value = 44;
	}
	*/
	
	constructor(value? : number) {
		this._value = value == null ? 41 : value;
	}

	state() {
		return `${Messages.Answer} ${this._value}`;
	}	
	
	get value() {
		return this._value;
	}
}

class TheRealAnswer extends TheAnswer {
	constructor() {
		super(46);
	}
	
	stateWithName(name : string) {
		return `${super.state()} , ${name}`;
	}
}

var answer = new TheAnswer();
alert(answer.state());

var myAnswer = new TheAnswer(43);
alert(myAnswer.state());

var realAnswer = new TheRealAnswer();
alert(realAnswer.stateWithName("Jason"));