var TheAnswer = (function () {
    function TheAnswer() {
        this._value = 43;
    }
    Object.defineProperty(TheAnswer.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return TheAnswer;
})();
exports.TheAnswer = TheAnswer;
//# sourceMappingURL=app.js.map