"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function freezable(target) {
    var original = target;
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object.freeze(construct(original, args));
    };
    newConstructor.prototype = original.prototype;
    return newConstructor;
}
var UnfrozenAnswer = (function () {
    function UnfrozenAnswer() {
    }
    return UnfrozenAnswer;
}());
var FrozenAnswer = (function () {
    function FrozenAnswer() {
    }
    return FrozenAnswer;
}());
FrozenAnswer = __decorate([
    freezable
], FrozenAnswer);
var Program = (function () {
    function Program() {
    }
    Program.Main = function () {
        var unfrozen = new UnfrozenAnswer();
        var frozen = new FrozenAnswer();
        unfrozen.qqq = "a";
        frozen.qqq = "a";
    };
    return Program;
}());
Program.Main();
//# sourceMappingURL=Program.js.map