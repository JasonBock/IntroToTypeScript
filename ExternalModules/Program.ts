import answers = require("./ExternalAnswers");

class Program {
    public static Main() {
        let answer = new answers.ExternalAnswers.TheAnswer();
        console.log(answer.state());
    }
}

Program.Main();