import crypto = require('crypto');

class Program {
    public static Main() : void {
		let hash = crypto.createHash("sha256");
		hash.update("Hello World");
        console.log(hash.digest("hex"));
    }
}

Program.Main();