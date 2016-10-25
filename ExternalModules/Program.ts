import requireAnswers = require("./ExternalAnswers");

import * as moduleAnswers from "./ExternalAnswers";

class Program {
    public static Main() {
        let requireAnswer = new requireAnswers.ExternalAnswers.TheAnswer();
        console.log(`requireAnswer is ${requireAnswer.state()}`);
        
        let moduleAnswer = new moduleAnswers.ExternalAnswers.TheAnswer();
        console.log(`moduleAnswer is ${moduleAnswer.state()}`);        
    }
}

Program.Main();