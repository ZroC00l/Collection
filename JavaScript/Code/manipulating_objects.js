/*Thr following code illustrates how to use a parameterized function
to modify the object's properties*/

var collection={

        1:{
            artist:"Tupac",
            album:"Me Against the World",
            date:1995,
            tracks:["Death Around the Corner","Lord Knows","It ain't Easy"]

        },
        2:{
            artist:"J.Cole",
            album:"2014 Forest Hill",
            date:2014,
            tracks:["Wet Dreams","Apparently","Fire Squad"]
        },
        3:{
            album:"Tha Carter 3",
            date:2008,
            tracks:["A Milli","Got Money","Lollipop"]
        },
        4:{
            artist: "Saint Jhn",
            date:2018,
            tracks:["Some Nights","Brilliant Bitch","Reflex"]
        },
        5:{
            artist: "Kendrick Lamar",
            album: "Good Kid Maad City"
        }

};

function modifier_function(object_id,property_name,property_value){
        //Delete the property inside the object if value is empty
        if(property_value ===""){
            delete collection[object_id][property_name];
        }
        /*If the property_name parameter is equal to "tracks" but the object itself has no property name
            of "tracks" inside it , then create that property then push values into that property*/
        else if(property_name==="tracks"){
            collection[object_id][property_name]=collection[object_id][property_name]||[];
            collection[object_id][property_name].push(property_value);
        }
        else{
            collection[object_id][property_name]=property_value;
        }
        return collection;

}

console.log(modifier_function(5,"date",2014));
console.log(modifier_function(5,"tracks","Swimming Pools"));
console.log(modifier_function(4,"album","Collection One"));
console.log(modifier_function(3,"artist","Lil Wayne"))