class Set{
	constructor(arr){
		this.arr = arr
	}

	add(val){
		if(!this.has(val))
		{
			this.arr.push(val);
		}
	}

	delete(val){
		this.arr = this.arr.filter(x => x !== val);
	}

	has(val){
		return this.arr.includes(val);
	}
	
	get size(){
		return this.arr.length;
	}
}

const s = new  Set([1, 2, 3, 4, 5]);

console.log("Current members of arr");
console.log(s.arr.toString());

console.log("Adding 1 to arr");
s.add(1);

console.log("arr members;");
console.log(s.arr.toString());

console.log("Adding 6 to arr");
s.add(6);

console.log("arr members;");
console.log(s.arr.toString());

console.log("Removing 6 from arr");
s.delete(6);

console.log("arr members");
console.log(s.arr.toString());
