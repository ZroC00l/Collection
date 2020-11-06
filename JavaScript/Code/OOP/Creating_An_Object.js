//This is an object call dog which has two value pairs, name and number of legs
let dog={
	name: "Max",
	age: 3,
	gender:"male",
	numLegs:4,
	sayAge:function(){
	    return "My dog "+ dog.name+ " is "+ dog.age+" years old.";
	},
	/*This method is uses the 'this' notation to access the object's property inside the
	 method sayGender, this example is different from the sayAge method notation
	 */
	sayGender: function(){
	    return this.name +" is a "+this.gender+ " dog.";
	}
};

//Accessing object's properties using dot notation

console.log("My dog's name is:"+ dog.name);
console.log("It has "+dog.numLegs+" legs");

//Using a method/function to access an object's properties
console.log(dog.sayAge());

//Using 'this' pointer to access an object's property inside a method
/* using the this notation prevents us from having to change all instances of
the dot notation in case the object's name changes, for instance if the object
dog was to be changed to cat, then we need only change the name of the object, the
methods using with that object that call the object's parameters using this wont need to
be changed unless the method directly uses the dot notation as dog.name instead of this.name*/
console.log(dog.sayGender());