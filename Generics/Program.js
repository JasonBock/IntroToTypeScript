var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GenericAnswer = /** @class */ (function () {
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
var ConstraintedAnswer = /** @class */ (function (_super) {
    __extends(ConstraintedAnswer, _super);
    function ConstraintedAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstraintedAnswer.prototype.state = function () {
        return "Your constrained answer is " + this.Value;
    };
    return ConstraintedAnswer;
}(GenericAnswer));
var RandomAnswer = /** @class */ (function () {
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
var NumberAnswer = /** @class */ (function (_super) {
    __extends(NumberAnswer, _super);
    function NumberAnswer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NumberAnswer;
}(GenericAnswer));
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var stringAnswer = new GenericAnswer("44");
        Program.PrintAnswer(stringAnswer);
        var constraintedAnswer = new ConstraintedAnswer(47);
        Program.PrintAnswer(constraintedAnswer);
        // Can't do this:
        // let constrainedStringAnswer = new ConstraintedAnswer("47");
        var numberAnswer = new NumberAnswer(43);
        Program.PrintAnswer(numberAnswer);
        var newAnswer = Program.CreateNewAnswer(RandomAnswer);
        console.log(newAnswer.Value);
        // Can't do this - no no-arg constructor:
        // Program.CreateNewAnswer(NumberAnswer);
        // But I could do this:
        var answerWithValue = Program.CreateNewAnswerWithValue(NumberAnswer, 22);
        console.log("answerWithValue.Value is " + answerWithValue.Value);
        // Or this:
        // Program.PrintAnswer(newAnswer);
    };
    Program.CreateNewAnswer = function (a) {
        return new a();
    };
    Program.CreateNewAnswerWithValue = function (a, value) {
        return new a(value);
    };
    Program.PrintAnswer = function (answer) {
        console.log(answer.state());
        return answer.Value;
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map