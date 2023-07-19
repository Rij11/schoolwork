//RoboAnt 6 V2.0

Change_Delay_To(100);   //Increase Movement Speed

while (Not_On_A_Marker()) {
	if (Right_Is_Clear()) {	//Turn at end of pillar
		Turn_Left();
		Turn_Left();
		Turn_Left();
		Move();
	} else if (Front_Is_Clear()){  //Moves forwards
        Move();
    } else if (Left_Is_Clear()) {  //Turn Left
        Turn_Left();
    } else if (Front_Is_Blocked()) { //Turns around
        Turn_Left();
        Turn_Left();
    }
}
Pick_Up_Marker();