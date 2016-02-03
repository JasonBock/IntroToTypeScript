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
		return `${super.state()}, ${name}`;
	}
}

class Program {
    public static Main() {
        var answer = new TheAnswer();
        console.log(answer.state());

        var myAnswer = new TheAnswer(43);
        console.log(myAnswer.state());

        var realAnswer = new TheRealAnswer();
        console.log(realAnswer.stateWithName("Jason"));
    }    
}

Program.Main();