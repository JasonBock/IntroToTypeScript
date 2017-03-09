"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requireAnswers = require("./ExternalAnswers");
var moduleAnswers = require("./ExternalAnswers");
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var requireAnswer = new requireAnswers.ExternalAnswers.TheAnswer();
        console.log("requireAnswer is " + requireAnswer.state());
        var moduleAnswer = new moduleAnswers.ExternalAnswers.TheAnswer();
        console.log("moduleAnswer is " + moduleAnswer.state());
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map