//Wk8 FIA1 Final V2.3

//Increase speed
Change_Delay_To(50);

//Stop Variable
var stop = 0;

//Main function
while (stop == 0) {
    Turn_Left();    //Changes starting direction
    Move();     //Moves onto new spot
    if (On_A_Marker()) {    //Checks new spot for marker
        Pick_Up_Marker();
    }
    else if (Front_Is_Blocked() && Left_Is_Clear() && Right_Is_Clear()) {   // Signals end of trail
        stop++; //Ends function
        while (Any_Markers_In_Marker_Bag()) {   //Drops all markers
            Put_Down_Marker();
        }
    }
    else {  //Turns back & moves to last spot
        Turn_Left();    
        Turn_Left();
        Move();
    }
}


//END