"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Messages;
(function (Messages) {
    Messages.Answer = "The answer is";
})(Messages || (Messages = {}));
var TheAnswer = /** @class */ (function () {
    function TheAnswer(value) {
        this._value = value === undefined ? 41 : value;
    }
    // You can't add this.
    /*
    constructor() {
        this.value = 44;
    }
    */
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
}());
var TheReadonlyAnswer = /** @class */ (function () {
    function TheReadonlyAnswer() {
        this._value = Math.random();
    }
    Object.defineProperty(TheReadonlyAnswer.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return TheReadonlyAnswer;
}());
var TheRealAnswer = /** @class */ (function (_super) {
    __extends(TheRealAnswer, _super);
    function TheRealAnswer() {
        // Have to call "super()" here:
        return _super.call(this, 46) || this;
    }
    TheRealAnswer.prototype.stateWithName = function (name) {
        return _super.prototype.state.call(this) + ", " + name;
    };
    return TheRealAnswer;
}(TheAnswer));
var TheOverloadedAnswer = /** @class */ (function () {
    function TheOverloadedAnswer(value) {
        this._value = value;
    }
    TheOverloadedAnswer.prototype.state = function (value) {
        if (typeof value === "boolean") {
            return this._value + ", " + value + " - boolean";
        }
        else if (typeof value === "string") {
            return this._value + ", " + value + " - string";
        }
        else {
            throw new Error("Unsupported type.");
        }
    };
    return TheOverloadedAnswer;
}());
var TheRandomAnswer = /** @class */ (function () {
    function TheRandomAnswer() {
        this._randomValue = Math.random();
    }
    TheRandomAnswer.prototype.state = function () {
        return "My random answer is " + this._randomValue;
    };
    return TheRandomAnswer;
}());
var TheNegativeAnswer = /** @class */ (function () {
    function TheNegativeAnswer() {
        this._negativeValue = -1;
    }
    TheNegativeAnswer.prototype.state = function () {
        return "My negative answer is " + this._negativeValue;
    };
    return TheNegativeAnswer;
}());
var TheMixedAnswer = /** @class */ (function () {
    function TheMixedAnswer() {
        this._randomValue = Math.random() * -1;
        this._negativeValue = this._randomValue;
    }
    TheMixedAnswer.prototype.state = function () {
        return "My mixed answer is " + this._randomValue;
    };
    return TheMixedAnswer;
}());
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var answer = new TheAnswer();
        console.log(answer.state());
        var myAnswer = new TheAnswer(43);
        console.log(myAnswer.state());
        var realAnswer = new TheRealAnswer();
        console.log(realAnswer.stateWithName("Jason"));
        // Intellisense picks up the overload
        var overloadedAnswer = new TheOverloadedAnswer(40);
        console.log(overloadedAnswer.state(true));
        console.log(overloadedAnswer.state("Jason"));
        var mixedAnswer = new TheMixedAnswer();
        console.log(mixedAnswer.state());
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map