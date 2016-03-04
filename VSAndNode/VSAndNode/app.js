var TheAnswer = (function () {
    function TheAnswer(value) {
        this._value = value;
    }
    TheAnswer.prototype.state = function () {
        return "The answer is " + this._value;
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
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var answer = new TheAnswer(44);
        console.log(answer.state());
    };
    return Program;
})();
console.log(process.version);
Program.Main();
console.log("Press return to exit.");
// FYI: https://nodejsmodules.org/tags/prompt
process.stdin.resume();
process.stdin.on("data", function (chunk) { return process.exit(); });
//# sourceMappingURL=app.js.map