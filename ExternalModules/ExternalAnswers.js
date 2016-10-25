"use strict";
var ExternalMessages;
(function (ExternalMessages) {
    ExternalMessages.Answer = "The external answer is";
})(ExternalMessages = exports.ExternalMessages || (exports.ExternalMessages = {}));
var ExternalAnswers;
(function (ExternalAnswers) {
    var TheAnswer = (function () {
        function TheAnswer(value) {
            this._value = value === undefined ? 41 : value;
        }
        TheAnswer.prototype.state = function () {
            return ExternalMessages.Answer + " " + this._value;
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
    ExternalAnswers.TheAnswer = TheAnswer;
})(ExternalAnswers = exports.ExternalAnswers || (exports.ExternalAnswers = {}));
//# sourceMappingURL=ExternalAnswers.js.map