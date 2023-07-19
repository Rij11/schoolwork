<?php
session_start();
if ($_POST["quiz1answers"] == "B") {
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
        <form action="qn3.php" method="post" id="style1">
            <h3>Question 2: What is Riley's favourite movie?</h3>
            
            <input type="radio" name="quiz2answers" value="A">
            <label> A) Your Name. </label><br>
            <input type="radio" name="quiz2answers" value="B">
            <label> B) The Good, the Bad and the Ugly </label><br>
            <input type="radio" name="quiz2answers" value="C">
            <label> C) Fate/stay night: Heaven's Feel III. spring song </label><br>
            <input type="radio" name="quiz2answers" value="D">
            <label> D) All of the Above </label>
            <br><br>
            <input type="submit" value="Submit" class="submitbtn" id="btn">
        </form>
    </body>
</html>