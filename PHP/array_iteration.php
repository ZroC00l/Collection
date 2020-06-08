<!DOCTYPE html>
<html>
<head>
    <title>Traversing an array in PHP</title>
</head>

<body>
<h1>Iterating through array elements with foreach loop</h1>
<hr>
    <?php
        /*We now look at how we can traverse a list of array elements
            and output them without having to individually access them and
            echo them individually, the foreach loop provides us with this
            functionality*/

         //Assume we have an array of provinces and higher institutions located at each province
         $area = array("North West"=>"Uniwest","Johannesburg"=>"Wits","FreeState"=>"UOFS","CapeTown"=>"UCT",
                    "Port Elizabeth"=>"NMMU","Northern Cape"=>"Sol Plaatje University");
          echo "<h3>Displaying array elements using foreach loop with keyname and valuename</h3> <br/>\n";
          foreach($area as $province => $institution)
          {
                echo "$province , $institution";
                echo "<br/>\n";

          }

          /*In the foreach loop parameter list the variable $province is optional
          but if you choose to omit it then only the value name variable an be used inside
          the block statement and only the values will be echoed, this next section illustrates
          the behaviour*/
          echo "<br/>\n";
          echo "<h3>Displaying array elements with the valuename variable as the only parameter</h3><br/>\n";
          foreach($area as $institution)
          {
            //This will only echo the institution name without the province
            echo "$institution";
            echo "<br/>\n";

          }

          echo "<hr>";
          echo "<h2>Accessing Array elements manually with pointers</h2> <br/>\n";
          /*Given we have an array of a list of animals as follows and we want to manually access
          each array element, to achieve this we make use of pointers, specifically php built in functions
          that work with arrays manually these include end(),current(),next(),reset(),previous() methods, they
          give us more flexibility than the foreach loop */

          $big_five = array("Elephant","Lion","Rhino","Buffalo","Leopard");

          //To output the current element
          $value = current($big_five);
          echo "This is the first element of the array: $value";
          echo "<br/>\n";

          $value = end($big_five);
          echo "This is the last element of the array: $value";
          echo "<br/>\n";

          $value =reset($big_five);
          $value = next($big_five);
          echo "This is the next element after the first: $value";
          echo "<br/>\n";

          $value = current($big_five);
          $value = next($big_five);
          echo "This is the next element after second array element: $value";
          echo "<br/>\n";
          $value = next($big_five);
          echo "This is the next element after the third array element: $value";
          echo "<br/>\n";

          $value = next($big_five);
                    echo "This is the next element after the fourth array element: $value";
                    echo "<br/>\n";

           $value = current($big_five);
           echo "This is the current element of the array element: $value";
           echo "<br/>\n";

           $value = reset($big_five);
           echo "This is the first element of the array element shown again: $value";
           echo "<br/>\n";

    ?>

</body>
</html>