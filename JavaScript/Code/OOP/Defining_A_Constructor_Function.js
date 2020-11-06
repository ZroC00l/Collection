//This method defines a constructor function called Dog with 3 parameters.

function Dog(){
	this.name="Max";
	this.colour="fawn";
	this.numLegs=4;
}

/*A Constructor function is used to create new instances of an object by using the keyword new
The code below creates a new instance called hound and assigns all the properties of Dog to hound*/

let hound= new Dog();

console.log("Dog name before overriding: "+hound.name);
//Change the name property
hound.name="King";
console.log("Dog name after overriding : "+ hound.name);