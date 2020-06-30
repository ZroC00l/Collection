<!DOCTYPE html>
<html>
<head>
    <title> Sorting Arrays in PHP</title>
</head>

<body>
<h1> Sorting Functions in PHP</h1>
<hr>
    <?php
        /*There are various sort methods that PHP supports we will go through each
         for arrays using numbers as keys and those using words as keys*/

         /*Assume we have an array of alphabets jumbled up and we have sort it in
          ascending order and then in descending order to achieve this we enlist the
          help of sort() and rsort() methods*/
          $alphabets = array("D","Z","Q","T","R","S","A","C","F","P","Y","E","X","H","N","V","M","B","K",
                        "J","G","I","U","W","O","L");
          echo "<h4>The Array before sorting </h4> <br/>\n";
          print_r($alphabets);
          echo "<br/>\n";
          echo "<h4>The Array After sorting in Ascending order </h4> <br/>\n";
          sort($alphabets);
          print_r($alphabets);
          echo "<br/>\n";

          echo "<h4>The Array after sorting in Descending order</h4><br/>\n";
          rsort($alphabets);
          print_r($alphabets);
          echo "<br/>\n";

          echo "<hr>";
          echo "<h2> How to order an array where words are used as keys</h2><br/>\n";
          //assume we have the following array of countries
          $countries = array("RSA"=>"Republic of South Africa","BW"=>"Botswana","ZW"=>"Zimbabwe",
                        "LS"=>"Lesotho","CM"=>"Cameroon","EG"=>"Egypt");

           echo "<h3>The array before sorting</h3><br/>\n";
           echo "<pre>";
           print_r($countries);
           echo "</pre>";

           echo "<br/>\n";
           echo "<h3> The array in Ascending order</h3><br/>\n";
           echo "<pre>";
           asort($countries); //asort() is php built in function to sort arrays that use words as keys
           print_r($countries);
           echo "</pre>";

           echo "<br/>\n";
           echo "<h3>The Array in Descending order</h3><br/>\n";
           echo "<pre>";
           arsort($countries);
           print_r($countries);
           echo "</pre>";

           echo "<hr>";
           echo "<h2> Ordering an array using the ksort() and krsort() methods</h2> <br/>\n";

           //Assume we have an array modules
           $modules = array("INL240"=>"Introduction to Information Science","COS212"=>"Data Structures","COS333"=>"Programming Languages",
                        "ALL111"=>"English","WTW152"=>"Mathematical Modeling","BES101"=>"Communication Modes","CAX200"=>"Construction Engineering");

           echo "<h3>The array before sorting</h3> <br/>\n";
           echo "<pre>";
           print_r($modules);
           echo "</pre>";

           echo "<br/>\n";
           echo "<h3>The array after sorting by key</h3> <br/>\n";
           echo "<pre>";
           ksort($modules);
           print_r($modules);
           echo "</pre>";


           echo "<br/>\n";
           echo "<h3>The array after sorting in reverse order by key</h3> <br/>\n";
           echo "<pre>";
           krsort($modules);
           print_r($modules);
           echo "</pre>";

           echo "<hr>";
           echo "<h2>Retrieving values from an array using list() and extract() methods</h2> <br />\n";

           /*This section goes over two methods used to get values from an array,
            list() method is used to retrieve several array elements , take note of the keyword
            'several', extract() method is used to retrieve all array elements and assign them to
            newly created variables*/
            $groceries = array("Bread",14.00,"Milk",13.00,"Eggs",40.00,"Oil",20.00);
            /*Take note list() method works with arrays that use numbers as keys
                list can only take two methods ,hence we say it retrieves 'several'
                array elements so in this array case it will only output the
                first two array elements which are Bread and 14.00
            */
            echo "<h3>Displaying elements using list() </h3> <br/>\n";
            list($food_item,$price)=$groceries;
            $price=number_format($price,2);
            echo "Food Item 1 is: $food_item<br/>\n";
            echo "Food Item 1 price is:R $price<br/>\n";

            echo "<br/>\n";
            echo "<h3> Displaying array elements using extract()</h3><br/>\n";
            $new_grocery = array("bread_price"=>14.00,"milk_price"=>13.00,"eggs_price"=>40.00,"oil_price"=>20.00);
            extract($new_grocery);
            $bread_price=number_format($bread_price,2);
            $milk_price=number_format($milk_price,2);
            $eggs_price=number_format($eggs_price,2);
            $oil_price=number_format($oil_price,2);
            echo "The bread price is:R $bread_price;The price of milk is:R $milk_price;The price of eggs is:R $eggs_price;
                     The price of cooking oil is:R $oil_price";
            echo "<br/>\n";




    ?>

</body>
</html>