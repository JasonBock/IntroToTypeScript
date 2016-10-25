"use strict";

class EvenError extends Error {
    constructor(message? : string) {
        super(message);
    }
}

function fragile(value : number) {
    if(value < 0) {
        throw new RangeError("Cannot be less than 0.");
    }
    else if(value % 2 === 0) {
        throw new EvenError("Even values are horrible!");
    }
    else if(value === 3) {
        throw new Error();
    }
}

class Program {
    static Main() {
        Program.callingFragile5();
        Program.callingFragileNegative1();
        Program.callingFragile2();
    }

    private static callingFragile5() {
        try {
            fragile(5);
        }
        catch(e) {
            console.log(`fragile(5) threw an error: ${e.message}`);
        }
        finally {
            console.log("fragile(5) finally.");
        }
    }

    private static callingFragileNegative1() {
        try {
            fragile(-1);
        }
        catch(e) {
            if(e instanceof RangeError) {
                console.log(`fragile(-1) threw an RangeError: ${e.message}`);
            }
            else {
                throw e;
            }
        }
        finally {
            console.log("fragile(-1) finally.");
        }
    }

    private static callingFragile2() {
        try {
            fragile(2);
        }
        catch(e) {
            if(e instanceof EvenError) {
                console.log(`fragile(2) threw an EvenError: ${e.message}`);
            }
            else {
                throw e;
            }
        }
        finally {
            console.log("fragile(2) finally.");
        }
    }
}

Program.Main();