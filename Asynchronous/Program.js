"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var Messages;
(function (Messages) {
    Messages.Answer = "The answer is";
})(Messages || (Messages = {}));
class TheAsynchronousAnswer {
    constructor(value) {
        this._value = value == null ? 41 : value;
    }
    state() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delay(2000);
            return `${Messages.Answer} ${this._value}`;
        });
    }
    delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
    get value() {
        return this._value;
    }
}
class Program {
    static Main() {
        return __awaiter(this, void 0, void 0, function* () {
            let answer = new TheAsynchronousAnswer();
            console.log(yield answer.state());
        });
    }
}
Program.Main();
//# sourceMappingURL=Program.js.map