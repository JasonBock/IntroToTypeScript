import requireAnswers = require("./ExternalAnswers");

import * as moduleAnswers from "./ExternalAnswers";

class Program {
    public static Main() {
        let requireAnswer = new requireAnswers.ExternalAnswers.TheAnswer();
        console.log(`requireAnswer is ${requireAnswer.state()}`);
        
        let moduleAnsewr = new moduleAnswers.ExternalAnswers.TheAnswer();
        console.log(`moduleAnsewr is ${moduleAnsewr.state()}`);        
    }
}

Program.Main();