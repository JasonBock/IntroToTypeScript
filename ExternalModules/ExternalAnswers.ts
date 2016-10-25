export module ExternalMessages {
	export const Answer = "The external answer is";
}

export module ExternalAnswers {
    export class TheAnswer {
        private _value : number;
        
        constructor(value? : number) {
            this._value = value === undefined ? 41 : value;
        }

        state() {
            return `${ExternalMessages.Answer} ${this._value}`;
        }	
        
        get value() {
            return this._value;
        }
    }
}