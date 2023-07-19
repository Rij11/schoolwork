<?php
session_start();
$_SESSION["Score"] = 0;
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Riley's Random Quiz</title>
        <link rel="stylesheet" href="css.css">
    </head>
    
    <body>
        <h1>Riley's Random Quiz</h1>
        <br><br>
        
        <!--Form-->
        <form action="qn2.php" method="post" id="style1">
            <h3>Question 1: What is Riley's favourite fruit?</h3>
            
            <input type="radio" name="quiz1answers" value="A">
            <label> A) Apple </label><br>
            <input type="radio" name="quiz1answers" value="B">
            <label> B) Banana </label><br>
            <input type="radio" name="quiz1answers" value="C">
            <label> C) Mango </label><br>
            <input type="radio" name="quiz1answers" value="D">
            <label> D) Grape </label>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>