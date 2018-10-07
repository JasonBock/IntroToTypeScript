var CustomPart = /** @class */ (function () {
    function CustomPart() {
    }
    CustomPart.prototype.updatePart = function (newName) {
        this.name = newName;
    };
    return CustomPart;
}());
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var analyzePart = function (part) {
            var name = part.name;
            var id = part.id;
            console.log("name is " + name + ", id is " + id);
            // this is OK:
            //let id2: number = part.subparts[0].id;
            //part.id = part.id;  // Error
            //part.subparts[0] = part.subparts[0];  // Error
            //part.subparts[0].id = part.subparts[0].id;  // Error
            //part.updatePart("hello");  // Error
        };
        var custom = new CustomPart();
        custom.id = 33;
        custom.name = "custom";
        analyzePart(custom);
        custom.updatePart("new custom");
        analyzePart(custom);
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map