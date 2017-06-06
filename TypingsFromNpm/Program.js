"use strict";
// npm install moment
// npm install --save @types/moment
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const MomentInTime_1 = require("./MomentInTime");
class Program {
    static Main() {
        console.log(moment().format());
        console.log(new MomentInTime_1.MomentInTime().Value);
    }
}
Program.Main();
//# sourceMappingURL=Program.js.map