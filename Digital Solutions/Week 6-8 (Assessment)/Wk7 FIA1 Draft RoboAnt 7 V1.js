//Wk7 FIA1 Draft V1.1


//Increase Movement Speed
Change_Delay_To(100);


//	Variables
var stop = 0; //Stop variable


//  Functions

//Turn Right
function turnRight() {
    Turn_Left();
    Turn_Left();
    Turn_Left();
}

//Checks sides
function checkSides() {
    turnRight();
    Move();
    if (On_A_Marker()) {
        Pick_Up_Marker();
    }
    else if (Front_Is_Blocked() && Left_Is_Clear() && Right_Is_Clear()) {
        stop++;
    }
    else {
        Turn_Left();
        Turn_Left();
        Move();
    }
}

//Collect Bread Crumb
function breadCrumbs() {
    if (On_A_Marker()) {
        Pick_Up_Marker();
    }
    else if (Not_On_A_Marker()) {
        checkSides();
    }
}


//  Sequence

Move(); //Moves onto first marer

while (Front_Is_Clear() && stop==0) { //Runs climb function until var stop == 1. (Hits the end wall)
breadCrumbs();
}

while (Any_Markers_In_Marker_Bag()) {
    Put_Down_Marker();
}