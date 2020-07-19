
const my_essence={
    music_genre:["Hip-Hop","RnB","Kwaito","House","Jazz","Reggae"],
    languages:["JavaScript","C++","Java","HTML&CSS","Python"],
    favourite_years:[1995,2005,2006,2008,2013],
    cars_model:[["Mercedez Benz",2014],["Toyota",86],["VW T-Cross",2019]],
    interests:{
        Hobbies:["Jogging","Jump rope","Strength Training","Netflix"],
        Gadgets:["Video Game Consoles","VR Oculus rift","apple","android"],
        Authors:["JK Rowling","Joel Osteen","William Shakespeare","Chinua Achebe"]
    }
};

function object_reader(arr){

    const display_my_essence=[];
    for(let i=0;i<arr.length;i++){
        display_my_essence.push(`<li class="list-items">${arr[i]}</li>`);
    }

    return display_my_essence;
}

const display_my_essence=object_reader(my_essence.music_genre);
console.log(display_my_essence);