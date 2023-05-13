<?php
session_start();
if ($_POST["quiz3answers"] == "A") { 
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
        <form action="qn5.php" method="post" id="style1">
            <h3>Question 4: What is Riley's favourite (Movie/TV) franchise?</h3>	
            
            <input type="radio" name="quiz4answers" value="A">
            <label> A) Star Wars </label><br>
            <input type="radio" name="quiz4answers" value="B">
            <label> B) Fast & Furious </label><br>
            <input type="radio" name="quiz4answers" value="C">
            <label> C) Fate </label><br>
            <input type="radio" name="quiz4answers" value="D">
            <label> D) Breaking bad </label>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>