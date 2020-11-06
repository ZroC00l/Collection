//This is an object call dog which has two value pairs, name and number of legs
let dog={
	name: "Max",
	age: 3,
	numLegs:4,
	sayAge:function(){
	    return "My dog "+ dog.name+ " is "+ dog.age+" years old";
	}
};

//Accessing object's properties using dot notation

console.log("My dog's name is:"+ dog.name);
console.log("It has "+dog.numLegs+" legs");

//Using a method/function to access an object's properties
console.log(dog.sayAge());