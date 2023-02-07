//Increase speed
Change_Delay_To(150)


//Functions

//Turn left x2
function Double_L() {
    Turn_Left();
    Turn_Left();  
}

//Picks up ALL markers on a point
function Pick_UpA() {
    while (On_A_Marker())   {
        Pick_Up_Marker();
    }
}

// Drop all markers
function Drop_Markers() {
    while(Any_Markers_In_Marker_Bag()) {
    Put_Down_Marker();
    }
}

//Goes up stairs
function Up_Stairs() {
    Turn_Left();    
    Move();
    Turn_Left();    // Turn Right
    Double_L();
    Move();
}

//Go down stairs
function Down_Stairs()  {
    Move();
    Turn_Left();
    Move();
    Turn_Left();
    Double_L();
}


//      Sequence

//Move to bottom of the stairs & pick up markers
for (var x=1; x<=6; x++) {
Pick_UpA();
Move();
}

//Move to bottom of the stairs & pick up markers
for (var x=1; x<=3; x++) {
Up_Stairs();
}

//Drop markers
Drop_Markers();

//Turn Around
Double_L();

//Down Stairs
for (var x=1; x<=3; x++) {
Down_Stairs();
}

//Move back to original spot
for (var x=1; x<=6; x++) {
Move();
}

// face original direction
Double_L();


// END
