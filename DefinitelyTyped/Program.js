/// <reference path="typings/main/definitions/moment/moment.d.ts" />
"use strict";
// Visit https://www.npmjs.com/package/typings and 
// https://github.com/typings/typings for all the typings details
const moment = require("moment");
class Program {
    static Main() {
        console.log(moment().format());
    }
}
Program.Main();
//# sourceMappingURL=Program.js.map