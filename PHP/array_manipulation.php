<!DOCTYPE html>
<html>
<head>
    <title>Working with arrays in PHP</title>
</head>

<body>
<h1>Working with Arrays in PHP</h1>
<hr>
    <?php
        /* The various ways to declare and initialize an array in PHP
            we will show the different ways and show which is more efficient when
            declaring an array and assigning values to it.
        */

       //Declare an array and its values long notation
       //Assume we have an array of favourite cars
       $cars[0] = "Mercedez C63 AMG";
       $cars[1] = "Mercedez G63 AMG";
       $cars[2] = "Toyota 86";
       $cars[3] = "Ferrari 488 spyder";
       $cars[4] = "Lamborghini aventador Roadster";

       /* To display the array contents we can use a notation known as
            array index notation to access each array element/value.*/
       echo "My first car is going to be a: $cars[2]";
       echo "<br/>\n";
       echo "My second car will be a: $cars[0]";
       echo "<br/>\n";
       echo "My third car will be a: $cars[1]";
       echo "<br/>\n";
       echo "Then my nice to have cars will then be a $cars[3] and $cars[4]";
       echo "<br/>\n";

       /* you can also declare an array and assign elements to it without putting
        in the index for each element, PHP will automatically give each element
        created an appropriate key*/
       echo "<hr>";
       //Assume we have an array of favourite music artists
       $artist[]="Tupac Amaru Shakur";
       $artist[]="The Game";
       $artist[]="Saint John";
       $artist[]="Dionne Warwick";
       $artist[]="Dobie Gray";
       $artist[]="Westlife";

       echo "My favourite rappers to listen to are $artist[0] , $artist[2] and $artist[1].";
       echo "<br/>\n";
       echo "My favourite soul artists to listen to are $artist[4] and $artist[3].";
       echo "<br/>\n";
       echo "My favourite RNB group to listen to is $artist[5].";
       echo "<br/>\n";


       /* We will now illustrate the shorthand notation for defining and assigning
        values to an array with numbers as 'keys' then next we will show the
        shorthand notation of declaring an array with words as keys.*/
        echo "<hr>";
        //Assume we have an array of days of the week
        $days_of_the_week = array("Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");

        echo "On $days_of_the_week[0] I like to do my chest workouts.";
        echo "<br/>\n";
        echo "Then on $days_of_the_week[1] I like to do my leg day.";
        echo "<br/>\n";
        echo "Then on $days_of_the_week[2] I like to do my cardio by going for a jog.";
        echo "<br/>\n";
        echo "On $days_of_the_week[3] I jump rope.";
        echo "<br/>\n";
        echo "Then on $days_of_the_week[4] I go for a walk.";
        echo "<br/>\n";
        echo "I like to spend my $days_of_the_week[5] watching soccer.";
        echo "<br/>\n";
        echo "On $days_of_the_week[6] is my day of worship.";
        echo "<br/>\n";

        /* Now that we know how to work with an array of numbers as keys , we
        have a look at how we define and assign to an array with words as keys.*/
        echo "<hr>";
        //assume we have an array of teachers and the subject each handles
        $teachers = array("Life Orientation"=>"Mrs.Kanyane","Mathematics"=>"Mrs.Karammel","Geography"=>"Mr.Mekgwe",
            "Life Sciences"=>"Mrs.Fenning", "English"=>"Mrs.Tshabalala");

         echo "My high school Maths teach was {$teachers['Mathematics']}.";
         echo "<br/>\n";
         echo "Thanks to {$teachers['Life Orientation']} for being not only a teacher but a mother to all her students.";
         echo "<br/>\n";
         echo "One of the funniest Geography teachers  Ive ever had was {$teachers['Geography']}.";
         echo "<br/>\n";
         echo "{$teachers['Life Sciences']} used to be one of those strict teachers with a kind heart.";
         echo "<br/>\n";
         echo "Shout out to {$teachers['English']} for being the best english teachers to ever do it , Concord is still killing me :''D .";
         echo "<br/>\n";


         /*So now how do we clear an element from an array, we show how to do this in this section
           of code, take note simply initializing an array element to empty using double quotes with
           a space wont do it, it simply sets that particular index to an empty string, so to remove and
           element from an array we enlist the help of the unset() method. */
         echo "<hr>";
           // Assume we have an array of colours

         $colours = array("Red","Green","White","Black","Orange");
         /*We use this print method to print the array structure with its keys and values
            however it will display it in a single line in html, so display it in a proper
            format in html we use html's <pre></pre> tags to get the desired effect.*/
         echo "<h3>Displaying array Contents using print_r method</h3>";
         echo "<pre>";
         print_r($colours);
         echo "</pre>";
         // The array after removing the colour white will be
         echo "<br/>\n";
         echo "<h3>The array after removing an element</h3>";
         unset($colours[2]);
         echo "<pre>";
         print_r($colours);
         echo "</pre>";

        echo "<br/>\n";
        echo "<h3>Displaying the array elements using the var_dump method</h3>";
        /* The following method displaying not only the array structure but the values,elements and data type
            of the elements in the array */
        echo "<pre>";
        var_dump($colours);
        echo "</pre>";
        echo "<br/>\n";

    ?>

</body>
</html>