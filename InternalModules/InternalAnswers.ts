namespace InternalMessages {
	export const Answer = "The internal answer is";
}

namespace InternalAnswers {
    export class TheAnswer {
        private _value : number;
        
        constructor(value? : number) {
            this._value = value == null ? 41 : value;
        }

        state() {
            return `${InternalMessages.Answer} ${this._value}`;
        }	
        
        get value() {
            return this._value;
        }
    }
}