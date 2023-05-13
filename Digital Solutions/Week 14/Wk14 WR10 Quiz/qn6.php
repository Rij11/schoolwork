<?php
session_start();
if ($_POST["quiz5answers"] == "") { 
    $_SESSION["Score"]++;
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Riley's Random Quiz</title>
        <link rel="stylesheet" href="css.css">
    </head>
    
    <body>
        <!--Form-->
        <form action="score.php" method="post" id="style1">
            <h3>Question 6: What book is Riley currently reading?</h3>	
            
            <input type="radio" name="quiz6answers" value="A">
            <label> A) Harry Potter </label><br>
            <input type="radio" name="quiz6answers" value="B">
            <label> B) The Lord of the Rings </label><br>
            <input type="radio" name="quiz6answers" value="C">
            <label> C) The Great Gatsby </label><br>
            <input type="radio" name="quiz6answers" value="D">
            <label> D) I'm a High School Boy and a Bestselling Light Novel author, strangled by my female classmate who is my junior and a voice actress </label>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>