/// <reference path="typings/main/definitions/moment/moment.d.ts" />

"use strict";

import moment = require("moment");

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