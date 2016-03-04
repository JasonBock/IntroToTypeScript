"use strict";

function freezable<TFunction extends Function>(target: TFunction) : TFunction {
  var original = target;

  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  let newConstructor : any = function(...args) {
    return Object.freeze(construct(original, args));
  }

  newConstructor.prototype = original.prototype;
  return newConstructor;
}

class UnfrozenAnswer { }

@freezable
class FrozenAnswer { }

class Program {
    public static Main() {
        let unfrozen : any = new UnfrozenAnswer();
        let frozen : any = new FrozenAnswer();
        
        unfrozen.qqq = "a";
        frozen.qqq = "a";        
    }    
}

Program.Main();