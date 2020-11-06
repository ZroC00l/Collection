/*This program uses a Constructor defined with parameters to create objects that are
instantiated when creating a new object*/

/*Problem: say we want to create a program for SPCA where there are over hundreds of different species of dogs
kept we would have to create hundreds of instatiantions for each object we create then asssign each individual dog breed's
name,color etc. , to prevent this tedious work what we can do is create a constructor with parameters*/

function Dog(name,colour,age){
	this.name=name;
	this.colour=colour;
	this.age=age;
	this.numLegs=4;//this parameter stays fixed since all dogs have 4 legs unless there are cases of injured ones then this paramter will be manually overidden
}

let Boerboel= new Dog("Max","fawn",3);

console.log(Boerboel.name);
console.log(Boerboel.colour);
console.log(Boerboel.age);
console.log(Boerboel.numLegs);

let Rottweiler = new Dog("Sid","Black and Gold",7);
console.log(Rottweiler.name);
console.log(Rottweiler.colour);
console.log(Rottweiler.age);
console.log(Rottweiler.numLegs);