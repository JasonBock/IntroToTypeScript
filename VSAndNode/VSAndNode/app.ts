class TheAnswer {
	protected _value: number;

	constructor(value: number) {
		this._value = value;
	}

	state() {
		return `The answer is ${this._value}`;
	}

	get value() {
		return this._value;
	}
}

class Program {
	public static Main() {
		let answer = new TheAnswer(44);
		console.log(answer.state());
	}
}

console.log(process.version);

Program.Main();

console.log("Press return to exit.");

// FYI: https://nodejsmodules.org/tags/prompt
process.stdin.resume();
process.stdin.on("data", chunk => process.exit());