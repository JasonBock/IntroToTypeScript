import * as moment from "moment";

export class MomentInTime {
    private value = moment().format();

    get Value() {
        return this.value;
    }
}