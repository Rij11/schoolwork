//RoboAnt 6 V1.0


//Increase Movement Speed
Change_Delay_To(100);


//	Variables

var stop = 0;	//Used to top movement after picking uo a marker


//  Functions

//Turn Right
function turnRight() {
    Turn_Left();
    Turn_Left();
    Turn_Left();
}

//Hill Climb function
function climbHill() {
    if (On_A_Marker() && stop==0) {   // Picks Up Marker
        Pick_Up_Marker();
    }
	else if (Any_Markers_In_Marker_Bag() && stop==0) {
		stop++;
	}
	else if (Right_Is_Clear() && stop==0) {	//Turn at end of pillar
		turnRight();
		Move();
	}
    else if (Front_Is_Clear() && stop==0){  //Moves forwards
        Move();
    }
	else if (Front_Is_Blocked() && Right_Is_Blocked() && stop==0) {  //Turn Left
        Turn_Left();
    }
    else if (Front_Is_Blocked() && Left_Is_Blocked() && stop==0) { //Turns right
        turnRight();
    }
}


//  Sequence

for (var x=1; x<50; x++) { //Runs climb function few times ~~Can't loop actual function for some reason
climbHill();
}


//END