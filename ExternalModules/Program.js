var answers = require("./ExternalAnswers");
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var answer = new answers.ExternalAnswers.TheAnswer();
        console.log(answer.state());
    };
    return Program;
})();
Program.Main();
//# sourceMappingURL=Program.js.map