/// <reference path="InternalAnswers.ts" />

class Program {
    public static Main() {
        var answer = new InternalAnswers.TheAnswer();
        console.log(answer.state());
    }
}

Program.Main();