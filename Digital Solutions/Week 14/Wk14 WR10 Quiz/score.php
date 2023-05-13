<?php 
session_start();
if ($_POST["quiz6answers"] == "D") { 
    $_SESSION["Score"]++;
} 
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Score</title>
        <link rel="stylesheet" href="css.css">
    </head>
    
    <body>
        <div>
            
	    <h1>Score</h1>
    	<?php  
        	    //Prints message with score
            echo "<h2>You scored: ". $_SESSION["Score"] . " out of a possible 6.</h2>";	
    	?>
        <br><br>
        
        <!--Button asking if the user wants to retry the quiz.-->
        <form name="RestartQuiz" method="post" action="qn1.php" id="style1">
            <input align="center" name="RestartQuiz" type="Submit" value="Want to Try Again?" id="btn">
        </form> 
        
        </div>
    </body>
</html>