interface Part {
	id: number;
	name: string;
	subparts: Part[];
	updatePart(newName: string): void;
}

class CustomPart implements Part {
	id: number;	
	name: string;
	subparts: Part[];
	updatePart(newName: string): void {
		this.name = newName;
	}
}

class Program {
	public static Main() : void {
		type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];
		type PartPropertyNames = NonFunctionPropertyNames<Part>;

		type DeepReadonly<T> =
			T extends any[] ? DeepReadonlyArray<T[number]> :
			T extends object ? DeepReadonlyObject<T> :
			T;
  
		interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
  
		type DeepReadonlyObject<T> = {
				readonly [P in NonFunctionPropertyNames<T>]: DeepReadonly<T[P]>;
		};

		type ReadOnlyStringArray = DeepReadonly<string[]>;
		type ReadOnlyString = DeepReadonly<string>;
		type ReadonlyPart = DeepReadonly<Part>;

		let analyzePart = (part: DeepReadonly<Part>) => {
			let name: string = part.name;
			let id = part.id;
			console.log(`name is ${name}, id is ${id}`);

			// this is OK:
			//let id2: number = part.subparts[0].id;
			//part.id = part.id;  // Error
			//part.subparts[0] = part.subparts[0];  // Error
			//part.subparts[0].id = part.subparts[0].id;  // Error
			//part.updatePart("hello");  // Error
		};
		  
		let custom = new CustomPart();
		custom.id = 33;
		custom.name = "custom";
		analyzePart(custom);
		custom.updatePart("new custom");
		analyzePart(custom);
	}
}

Program.Main();