var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){

for(var index=0;index<contacts.length;index++){
 if(contacts[index].firstName===name){
     return contacts[index][prop]||"No such property";
} }return "No such contact";

}

console.log(lookUpProfile("Bob", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Akira", "number"));
console.log(lookUpProfile("Harry", "lastName"));