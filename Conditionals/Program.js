var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var readonlyPart = function (part) {
            var name = part.name;
            var id = part.subparts[0].id;
            part.id = part.id; // Error
            part.subparts[0] = part.subparts[0]; // Error
            part.subparts[0].id = part.subparts[0].id; // Error
            part.updatePart("hello"); // Error
        };
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map