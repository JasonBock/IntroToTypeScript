var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Messages;
(function (Messages) {
    Messages.Answer = "The answer is";
})(Messages || (Messages = {}));
var TheAnswer = (function () {
    // You can't do this.
    /*
    constructor() {
        this.value = 44;
    }
    */
    function TheAnswer(value) {
        this._value = value == null ? 41 : value;
    }
    TheAnswer.prototype.state = function () {
        return Messages.Answer + " " + this._value;
    };
    Object.defineProperty(TheAnswer.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return TheAnswer;
})();
var TheRealAnswer = (function (_super) {
    __extends(TheRealAnswer, _super);
    function TheRealAnswer() {
        _super.call(this, 46);
    }
    TheRealAnswer.prototype.stateWithName = function (name) {
        return _super.prototype.state.call(this) + ", " + name;
    };
    return TheRealAnswer;
})(TheAnswer);
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var answer = new TheAnswer();
        console.log(answer.state());
        var myAnswer = new TheAnswer(43);
        console.log(myAnswer.state());
        var realAnswer = new TheRealAnswer();
        console.log(realAnswer.stateWithName("Jason"));
    };
    return Program;
})();
Program.Main();
//# sourceMappingURL=Classes.js.map