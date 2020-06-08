<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Variables in PHP</title>
</head>

<body>

    <?php
        /*The following script illustrates the variable variable functionality
            in between variables, basically we name a variable with the value
            stored in another variable, in this example illustrates performance
            marks for each subject at hand*/

            $mathematics = 80;
            $IT = 90;
            $english = 65;
            $subject = "mathematics";

            /* Without the the curly braces notation this will simply
                output the the subject name with an extra dollar sign
                so take note of the notation used to achieve the desired result*/

            echo "My mathematics final mark is: ${$subject}";
            echo "<br /> \n";

            $subject = "english";

            echo "My english final mark is: ${$subject}";
            echo "<br /> \n";

            $subject = "IT";

            echo "My IT final mark is: ${$subject}";

    ?>

</body>

</html>


