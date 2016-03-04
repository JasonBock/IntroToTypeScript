export class TheAnswer {
	private _value: number;

	constructor() {
		this._value = 43;
	}

	get value() {
		return this._value;
	}
}