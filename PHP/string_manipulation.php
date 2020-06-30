<!DOCTYPE html>
<html>
<head>
    <title>Manipulating Strings in PHP</title>
    <style type=text/css>
        p{
            color:red;
        }
    </style>

</head>

<body>
<h1> Formatting Strings in PHP</h1>
<hr>
    <?php
        //Difference between Double quoted strings and singly qouted strings
        $number_of_candies = 10;
        $type_of_candy = "licorice";
        $my_string1 = "Billy has $number_of_candies pieces of $type_of_candy ";
        $my_string2 = 'Cathy has $number_of_candies pieces of $type_of_candy';

        echo "My double quoted string output is: $my_string1";
        echo "<br /> \n";

        echo  "My singly quoted string output is: $my_string2";
        echo "<br /> \n";

        echo "<p>Double quoted strings print the value of the variable while singly quoted strings print the literal variable name</p>";
        echo "<br />\n";
        echo "<hr>";

        echo "<h2>The following is illustration of Concatenation in php </h2>";
        $string1 =  "Hello";
        $string2 = "my name is";
        $name = 'Gift';
        $string3 = "and I love to write code and learn fun stuff to do with code";

        echo $string1." ".$string2." ".$name." ".$string3;


        echo "<hr>";
        echo "<h2>This is an illustration of how the heredoc feature works with long strings</h2>";
        echo "<hr";
        echo"<br/>\n";
        echo "<br />\n";
$paragraph_string = <<<EOT
    This is a scenario between two
    friends and this is how
    it goes,$my_string1 , and Jake has no money
    to buy some , but since Billy and Jake
    are friends Billy shares half of his
    licorice with Jake.
EOT;
        /* heredoc is sensitive to editing and spacing so take note of the indentation above
            nothing should come after the first EOT and the last EOT should be on a new line by itself
            with nothing preceding it or following it , otherwise php will give a parse error.*/
        echo $paragraph_string;
        echo "<hr>";

        echo "<h2>This is an illustration of the behavioural differences in Double quotes and single quotes in php</h2>";
        $career = 'web development';
        $colour = 'red';
        $_string= "My favourite career field is: '$career' ";
        $_string2= 'My favourite colour is: "$colour" ';

        echo "output using double quotes= ".$_string;
        print "<br/>\n";
        echo "output using single quotes= ".$_string2;

        /* Notice how the first string behaves by printing the value of career variable
            that is because the enclosing double quotes overwrites whatever quotes go inside them,
            and notice how the single quotes print the literal variable name even though its enclosed
            within double quotes that is because the entire original string is all enclosed in single quotes
            and rule in php strings is the outermost enclosing quotes determine the treatment of
            variables and other special characters inside the entire string so with single quotes the literal variable
            name is used or printed instead of the variable's value*/
        echo"<hr>";
        echo "<h2>This illustrates how to add an apostrophe to a string in single quotes notation </h2>";
        $no_apostrophe = "On my free days I visit my mother's and father's house";
        $_apostrophe2 = 'I enjoy reading John Osteen\'s novels';

        echo $no_apostrophe;
        echo "<br />";
        echo $_apostrophe2;
           /* We use a backslash if we want to add an apostrophe to a string that is using
           single quotes , in double quotes however the backslash is not required , the reason behind
           the requirement of the backslash in single quotes is to prevent php from thinking that is the end of
           the string or for install in our example if we were to write
           'I enjoy reading John Osteen's novels' the output would be 'I enjoy reading John Osteen' the other
           remaining part would be omitted cause php assumes the string is being closed so to prevent this
           we enlist the help of a backslash.*/

    ?>

</body>
</html>