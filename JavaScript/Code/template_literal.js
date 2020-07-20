//My object
const my_essence={
    //nested object which is to be frozen to show how the Object.freeze method works
    demographics:{
        race:"African",
        height:"5ft. 5inches",
        contact:0748639298
    },

    music_genre:["Hip-Hop","RnB","Kwaito","House","Jazz","Reggae"],
    languages:["JavaScript","C++","Java","HTML&CSS","Python"],
    favourite_years:[1995,2005,2006,2008,2013],
    cars_model:[["Mercedez Benz",2014],["Toyota",86],["VW T-Cross",2019]],
    //Another Nested object
    interests:{
        Hobbies:["Jogging","Jump rope","Strength Training","Netflix"],
        Gadgets:["Video Game Consoles","VR Oculus rift","apple","android"],
        Authors:["JK Rowling","Joel Osteen","William Shakespeare","Chinua Achebe"]
    }
};
/*This function will output the contents of the object property in a
a list using the HTML li tag to list the array contents of the
the object property passed as the function argument*/
function object_reader(arr){
    "use strict";
    const display_my_essence=[];
    for(let i=0;i<arr.length;i++){
        display_my_essence.push(`<li class="list-items">${arr[i]}</li>`);
    }

    return display_my_essence;
}
/*This function will throw an error in attempt to change the contents of the frozen object
passed as the function argument*/
function Object_freezer(object){
    "use strict";
    Object.freeze(object);
    try{
        object.name=["Uncle Groovey"];

    }catch(object){
        console.log("Cannot Change a frozen Object");
    }
    return;
}


/***************************************************************
                Testing the Object Properties an Function
                            Output
****************************************************************/
const attr= my_essence.interests.Hobbies;
my_essence.artists=["Saint Jhn","Tupac","Nas","Polo G","Mobb Deep"];
my_essence.artists[5]="Biggie";
my_essence.vacation_destinations=["Cancun","Canada","Kenya","Zimbabwe","Namibia","Thailand"];
let vacations=my_essence.vacation_destinations;
let display_object=my_essence;
let nested_Object=my_essence.demographics;

Object_freezer(my_essence.demographics);
my_essence.demographics.name="Uncle Groovey";


const display_my_essence=object_reader(my_essence.music_genre);
console.log(display_my_essence);
console.log(attr);
console.log(display_object);
console.log(nested_Object);
console.log(vacations);
