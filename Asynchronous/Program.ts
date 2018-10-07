module Messages {
	export const Answer = "The answer is";
}

class TheAsynchronousAnswer {
	private _value : number;
	
	constructor(value? : number) {
		this._value = value === undefined ? 41 : value;
	}

	async state() {
		await this.delay(2000);
		return `${Messages.Answer} ${this._value}`;
	}	
	
    private delay(milliseconds: number) {
		return new Promise(resolve => {
			setTimeout(resolve, milliseconds);
		});
    }

	get value() {
		return this._value;
	}
}

class Program {
    public static async Main() {
        let answer = new TheAsynchronousAnswer();
        console.log(await answer.state());
    }    
}

Program.Main();