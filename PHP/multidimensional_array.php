<!DOCTYPE html>
<html>
<head>
    <title>Multidimensional Arrays in PHP</title>
</head>

<body>
<h1> Working with Multidimensional Arrays in PHP</h1>
<hr>

    <?php
        /* To show how multidimensional arrays work in php assume we have a multidimensional
            array of provinces and cities, each storing a value which is the name of the university
            located at that particular city within that province*/

        /* When creating this 2D array take note that the outer key e.g. NW,GP etc. must be unique meaning we cant have
         the same outer key , this will not output some array elements if they have the same outer key*/

          $varsities = array('NW'=>array('Mafikeng'=>'Uniwest'),'JHB'=>array('Joburg'=>'University Of Johannesburg'),'GP'=>array('Pretoria'=>'TUKS'),
          'WC'=>array('Cape Town'=>'UCT'),'KZN'=>array('Durban'=>'UKZN'));

          //This will print the array structure
          echo "<pre>";
          print_r($varsities);
          echo "</pre>";

          echo "<hr>";
          echo "<h3>Manually retrieving array elements from 2d array using 2d array index notation</h3><br/>\n";
          //Manually traversing or retrieving elements from 2D array
          echo "In Northwest we have {$varsities['NW']['Mafikeng']} main campus <br/>\n";
          echo "In Gauteng we have {$varsities['JHB']['Joburg']} main campus in Auckland park<br/>\n";
          echo "In Gauteng we also have  {$varsities['GP']['Pretoria']} main campus situated in Hatfield.<br/>\n";
          echo "In Western Cape we have {$varsities['WC']['Cape Town']} main campus <br/>\n";
          echo "In Kwa-Zulu-Natal we have {$varsities['KZN']['Durban']} main campus<br/>\n";


          echo "<hr>";
          echo "<h3> Traversing a 2d array using foreach loop</h3><br/>\n";
          /* This nested loop is used to print contents of a 2d associative array
            take note of the first foreach outer statement , it has a variable
            called new_array, this variable is used to store the key/value pair of
            province and city for each institution, the inner foreach then goes through
            the newly created variable new_array and then traverses it and outputs the
            key and value pair for the 2d array */

          foreach($varsities as $new_array)
          {
                foreach ( $new_array as $province => $city_town)
                {
                      echo "$province, $city_town <br/>\n";
                }
          }

    ?>

</body>
</html>