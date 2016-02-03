import answers = require("./ExternalAnswers");

class Program {
    public static Main() {
        var answer = new answers.ExternalAnswers.TheAnswer();
        console.log(answer.state());
    }
}

Program.Main();