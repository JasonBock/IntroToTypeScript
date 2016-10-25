var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericAnswer = (function () {
    function GenericAnswer(value) {
        this._value = value;
    }
    GenericAnswer.prototype.state = function () {
        return "Your generic answer is " + this._value;
    };
    Object.defineProperty(GenericAnswer.prototype, "Value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return GenericAnswer;
}());
var RandomAnswer = (function () {
    function RandomAnswer() {
        this._value = Math.random();
    }
    Object.defineProperty(RandomAnswer.prototype, "Value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return RandomAnswer;
}());
var NumberAnswer = (function (_super) {
    __extends(NumberAnswer, _super);
    function NumberAnswer() {
        _super.apply(this, arguments);
    }
    return NumberAnswer;
}(GenericAnswer));
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var stringAnswer = new GenericAnswer("44");
        Program.PrintAnswer(stringAnswer);
        var numberAnswer = new NumberAnswer(43);
        Program.PrintAnswer(numberAnswer);
        var newAnswer = Program.CreateNewAnswer(RandomAnswer);
        console.log(newAnswer.Value);
        // Can't do this - no no-arg constructor:
        // Program.CreateNewAnswer(NumberAnswer);
        // Or this:
        // Program.PrintAnswer(newAnswer);
    };
    Program.CreateNewAnswer = function (a) {
        return new a();
    };
    Program.PrintAnswer = function (answer) {
        console.log(answer.state());
        return answer.Value;
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map