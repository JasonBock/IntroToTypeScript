// npm install moment
// npm install --save @types/moment

import * as moment from "moment";

class Program {
    public static Main() {
        console.log(moment().format());
    }
}

Program.Main();