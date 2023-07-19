<?php
session_start();
if ($_POST["quiz2answers"] == "D") { 
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
        <form action="qn4.php" method="post" id="style1">
            <h3>Question 3: What is Riley's current job title?</h3>	
            
            <input type="radio" name="quiz3answers" value="A">
            <label> A) Farm Supervisor </label><br>
            <input type="radio" name="quiz3answers" value="B">
            <label> B) Farm Worker </label><br>
            <input type="radio" name="quiz3answers" value="C">
            <label> C) Farm Hand </label><br>
            <input type="radio" name="quiz3answers" value="D">
            <label> D) Farm Manager  </label>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>