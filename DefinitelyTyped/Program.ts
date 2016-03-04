/// <reference path="typings/main/definitions/moment/moment.d.ts" />

"use strict";

// Visit https://www.npmjs.com/package/typings and 
// https://github.com/typings/typings for all the typings details

import * as moment from "moment";

class Program {
    public static Main() {
        console.log(moment().format());
    }
}

Program.Main();

export module MyStuff {
    export interface MyInterface {
        myCall() : string;
    }
}