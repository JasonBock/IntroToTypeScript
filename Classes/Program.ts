namespace Messages {
	export const Answer = "The answer is";
}

interface IAnswer {
	state() : string;
}

class TheAnswer implements IAnswer {
	protected _value : number;
	
	constructor(value? : number) {
		this._value = value === undefined ? 41 : value;
	}

	// You can't add this.
	/*
	constructor() {
		this.value = 44;
	}
	*/

	state() {
		return `${Messages.Answer} ${this._value}`;
	}	
	
	get value() {
		return this._value;
	}
}

class TheRealAnswer extends TheAnswer {
	constructor() {
		// Have to call "super()" here:
		super(46);
	}
	
	stateWithName(name : string) {
		return `${super.state()}, ${name}`;
	}
}

class TheOverloadedAnswer {
	protected _value : number;

	constructor(value : number) {
        this._value = value;
	}
	
    state(isGood : boolean) : string;
    state(name : string) : string;

	state(value : boolean | string) {
        if(typeof value == "boolean") {
    		return `${this._value}, ${value} - boolean`;
        }
        else if(typeof value == "string") {
    		return `${this._value}, ${value} - string`;
        }
        else {
            throw new Error("Unsupported type.");
        }
	}
}

class TheRandomAnswer {
    _randomValue : number;
    
	constructor() {
		this._randomValue = Math.random();
	}

	state() {
		return `My random answer is ${this._randomValue}`;
	}	
}

class TheNegativeAnswer {
    _negativeValue : number;
    
	constructor() {
		this._negativeValue = -1;
	}

	state() {
		return `My negative answer is ${this._negativeValue}`;
	}	
}

class TheMixedAnswer implements TheRandomAnswer, TheNegativeAnswer {
    _negativeValue : number;
    _randomValue : number;
	
	constructor() {
		this._randomValue = Math.random() * -1;
        this._negativeValue = this._randomValue;
	}

	state() {
		return `My mixed answer is ${this._randomValue}`;
	}    
}

class Program {
    public static Main() {
        let answer = new TheAnswer();
        console.log(answer.state());

        let myAnswer = new TheAnswer(43);
        console.log(myAnswer.state());

        let realAnswer = new TheRealAnswer();
        console.log(realAnswer.stateWithName("Jason"));

        // Intellisense picks up the overload
        let overloadedAnswer = new TheOverloadedAnswer(40);
        console.log(overloadedAnswer.state(true));
        console.log(overloadedAnswer.state("Jason"));
        let mixedAnswer = new TheMixedAnswer();
        console.log(mixedAnswer.state());
    }    
}

Program.Main();