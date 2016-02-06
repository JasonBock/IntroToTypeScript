interface IAnswer<T> {
    Value : T;
}

class GenericAnswer<T> implements IAnswer<T> {
    private _value : T;
    
    constructor(value : T) {
        this._value = value;
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
        var numberAnswer = new NumberAnswer(43);
        console.log(numberAnswer.Value);
        
        var stringAnswer = new GenericAnswer<string>("44");
        console.log(stringAnswer.Value);
        
        var newAnswer = Program.CreateNewAnswer(RandomAnswer);
        console.log(newAnswer.Value);
    }
    
    private static CreateNewAnswer<T>(a : {new(): IAnswer<T>}) : IAnswer<T> {
        return new a();
    }
}

Program.Main();