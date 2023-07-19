<?php
session_start();
if ($_POST["quiz4answers"] == "C") { 
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
        <form action="qn6.php" method="post" id="style1">
            <h3>Question 5: Is this a trick question?</h3>	
            
            <input type="radio" name="quiz5answers" value="A">
            <label> A) Yes </label><br>
            <input type="radio" name="quiz5answers" value="B">
            <label> B) No </label><br>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>