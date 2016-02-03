var InternalMessages;
(function (InternalMessages) {
    InternalMessages.Answer = "The internal answer is";
})(InternalMessages || (InternalMessages = {}));
var InternalAnswers;
(function (InternalAnswers) {
    var TheAnswer = (function () {
        function TheAnswer(value) {
            this._value = value == null ? 41 : value;
        }
        TheAnswer.prototype.state = function () {
            return InternalMessages.Answer + " " + this._value;
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
    InternalAnswers.TheAnswer = TheAnswer;
})(InternalAnswers || (InternalAnswers = {}));
/// <reference path="InternalAnswers.ts" />
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var answer = new InternalAnswers.TheAnswer();
        console.log(answer.state());
    };
    return Program;
})();
Program.Main();
//# sourceMappingURL=InternalModules.js.map