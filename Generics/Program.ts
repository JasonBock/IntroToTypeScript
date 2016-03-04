interface IAnswer<T> {
    Value : T;
}

class GenericAnswer<T> implements IAnswer<T> {
    private _value : T;
    
    constructor(value : T) {
        this._value = value;
    }
    
    state() : string {
        return `Your generic answer is ${this._value}`;
    }
    
    get Value() : T {
        return this._value;    
    }        
}

class RandomAnswer implements IAnswer<number> {
    private _value : number;
    
    constructor() {
        this._value = Math.random();
    }
    
    get Value() : number {
        return this._value;    
    }            
}

class NumberAnswer extends GenericAnswer<number> { }

class Program {
    public static Main() : void {
        var stringAnswer = new GenericAnswer<string>("44");
        Program.PrintAnswer(stringAnswer);
        
        var numberAnswer = new NumberAnswer(43);
        Program.PrintAnswer(numberAnswer);
                
        var newAnswer = Program.CreateNewAnswer(RandomAnswer);
        console.log(newAnswer.Value);
        
        // Can't do this - no no-arg constructor:
        // Program.CreateNewAnswer(NumberAnswer);
        
        // Or this:
        // Program.PrintAnswer(newAnswer);
    }
    
    private static CreateNewAnswer<T>(a : {new(): IAnswer<T>}) : IAnswer<T> {
        return new a();
    }
    
    private static PrintAnswer<T>(answer : GenericAnswer<T>) : T {
        console.log(answer.state());
        return answer.Value;
    }
}

Program.Main();