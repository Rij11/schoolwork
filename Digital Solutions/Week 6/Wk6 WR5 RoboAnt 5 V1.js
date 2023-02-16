//Wk6 WR5 V1.0


//Increase Movement Speed
Change_Delay_To(100);


//Variables

var markers = 0;    //Counts Markers
var stop = 0;   //Stops RoboAnt from picking up markers he drops at the end
var moves = 0;	//Counts every Move
var turns = 0;  //Counts every turn (1 For Right & left, & 2 for turning around)


//  Functions

//Turn Right
function turnRight() {
    Turn_Left();
    Turn_Left();
    Turn_Left();
}

//Explore maze function
function gogoMaze() {
	Say('Markers: ' + markers);
	Say('Moves: ' + moves);
	Say('Turns: ' + turns);
	Say('   ');
    if (On_A_Marker() && stop==0) {   // Picks Up Marker
        Pick_Up_Marker();
        markers++;
    }
    else if (Front_Is_Clear()){  //Moves forwards in Maze
        Move();
        moves++;
    }
	else if (Front_Is_Blocked() && Right_Is_Clear() && Left_Is_Clear())	{	//Stops at End
		stop++;
		while (Any_Markers_In_Marker_Bag())	{   //Drops all markers
			Put_Down_Marker();
		}
	}
    else if (Front_Is_Blocked() && Right_Is_Blocked() && Left_Is_Blocked()) { //Turn around at end
        Turn_Left();
        Turn_Left();
        Move();
        moves++;
        turns=turns+2;
    }
    else if (Front_Is_Blocked() && Left_Is_Blocked()) { //Turns right
        turnRight();
        Move();
        moves++;
        turns++;
    }
    else if (Front_Is_Blocked() && Right_Is_Blocked()) {  //Turn Left
        Turn_Left();
        Move();
        moves++;
        turns++;
    }
}


//  Sequence

for (var x=1; x<=80; x++) { //Runs Maze function few times ~~Can't loop for some reason
gogoMaze();
}


//END