<!DOCTYPE html>
<html>
<head>
    <title> Arithmetic Operations in PHP</title>
</head>


<body>
<h1> The Following are a list of Arithmetic operations performed in PHP</h1>
<hr>
<br />
    <?php
            //Adding two integer numbers
            $num1= 25;
            $num2 = 64;
            $sum =  $num1 +$num2;

            echo "The sum of $num1 + $num2 = $sum";

            print "<br /> \n";

            //Multiplying two integers
            $num3 = 7;
            $num4 = 8;
            $sum1 = $num3 *$num4;

            echo "The multiplication of $num3 * $num4 = $sum1";

            print "<br /> \n";

            //Dividing two integers

            $num5 = 100;
            $num6 = 20;
            $sum2 = $num5/$num6;

            echo "The division of $num5 / $num6 = $sum2";

            print "<br /> \n";
            print "<br /> \n";
            //The Following is BODMAS example of the combined arithmetic operations
            $var1= 5;
            $var2= 2;
            $var3 = 7;
            $var4= 8;
            $var5 = 10;

            $total = $var5/$var1*$var3+$var4-$var2;

            echo "Using BODMAS the sum of $var5 / $var1 * $var3 + $var4 - $var2 = $total ";

            print "<br / > \n";

            echo "<hr>";
            /*The following is an example of working with the sprintf() function
                we use this function when dealing with normally financial programs
                its used to represent numbers in PHP in money format which is standard
                in the business world we will also show another function similar to it
                called number_format()*/
             echo "<h2> The sprintf() and number_formation functions</h2>";

             $amount= 500;
             $new_amount = sprintf("%01.2f",$amount);

             echo "The integer $amount using sprintf() functions yields :R $new_amount";
             echo "<br /> \n";

             echo"The datatype of $amount changed from ", var_dump($amount)," to ",var_dump($new_amount), " after applying sprintf()";
             print "<br /> \n";

             $my_amount = 100000;
             $my_new_amount = number_format($my_amount,2);

             echo "The integer $my_amount after using number_format() functions gives me:R $my_new_amount";
             echo "<br />\n";
             echo "The  datatype of $my_amount changed from ", var_dump($my_amount), " to ", var_dump($my_new_amount), "after applying number_format()";

             echo "<hr>";
             echo "<h2>Working with floats in PHP</h2>";

             $my_float = 3.45;
             $my_float2 = 6.55;
             $float_sum = $my_float + $my_float2;

             echo "Adding $my_float + $my_float2 = $float_sum";
             echo "<br/ >\n";
             echo "The datatype of result is: ",var_dump($float_sum);

             echo "<br/ >\n";

             $float_sum = $my_float * $my_float2;
             echo "Multiplying $my_float + $my_float2 = $float_sum";
             echo "<br/ >\n";
             echo "The datatype of result is: ",var_dump($float_sum);

             echo "<br/ >\n";
             $float_sum = $my_float2/$my_float;
             echo "Dividing $my_float2 + $my_float = $float_sum";
             echo "<br/ >\n";
             echo "The datatype of result is: ",var_dump($float_sum);

            echo "<br/ >\n";
            echo "<br/ >\n";
            $my_float3 = 4.55;
            $my_float4= 5.23;
            $my_float5 = 12.45;
            $my_float6 = 10.32;
            $my_float7 = 15.32;

            $float_sum = $my_float6*$my_float5/$my_float4+$my_float3-$my_float7;
            echo "Using BODMAS the total of $my_float6 * $my_float5 / $my_float4 + $my_float3 - $my_float7 = $float_sum";
            echo "<br/ >\n";
            echo "The datatype of result is: ",var_dump($float_sum);





    ?>

</body>
</html>