"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class MomentInTime {
    constructor() {
        this.value = moment().format();
    }
    get Value() {
        return this.value;
    }
}
exports.MomentInTime = MomentInTime;
//# sourceMappingURL=MomentInTime.js.map