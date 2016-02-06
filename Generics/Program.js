var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GenericAnswer = (function () {
    function GenericAnswer(value) {
        this._value = value;
    }
    Object.defineProperty(GenericAnswer.prototype, "Value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return GenericAnswer;
})();
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
})();
var NumberAnswer = (function (_super) {
    __extends(NumberAnswer, _super);
    function NumberAnswer() {
        _super.apply(this, arguments);
    }
    return NumberAnswer;
})(GenericAnswer);
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var numberAnswer = new NumberAnswer(43);
        console.log(numberAnswer.Value);
        var stringAnswer = new GenericAnswer("44");
        console.log(stringAnswer.Value);
        var newAnswer = Program.CreateNewAnswer(RandomAnswer);
        console.log(newAnswer.Value);
    };
    Program.CreateNewAnswer = function (a) {
        return new a();
    };
    return Program;
})();
Program.Main();
//# sourceMappingURL=Program.js.map