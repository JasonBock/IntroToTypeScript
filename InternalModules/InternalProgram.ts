/// <reference path="InternalAnswers.ts" />

class Program {
    public static Main() {
        let answer = new InternalAnswers.TheAnswer();
        console.log(answer.state());
    }
}

Program.Main();