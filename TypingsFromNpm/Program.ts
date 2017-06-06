// npm install moment
// npm install --save @types/moment

import * as moment from "moment";
import { MomentInTime } from "./MomentInTime";

class Program {
    public static Main() {
        console.log(moment().format());
        console.log(new MomentInTime().Value);
    }
}

Program.Main();