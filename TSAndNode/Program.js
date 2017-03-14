"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var hash = crypto.createHash("sha256");
        hash.update("Hello World");
        console.log(hash.digest("hex"));
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map