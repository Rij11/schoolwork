//Increase speed
Change_Delay_To(150);


//Functions

//Turn left x2
function Double_L() {
    Turn_Left();
    Turn_Left();  
}

//Move forward then pick up a marker
function pickUpMove() {
    Move();
    Pick_Up_Marker();
}

// Drop all markers
function Drop_Markers() {
    while(Any_Markers_In_Marker_Bag()) {
    Put_Down_Marker();
    }
}

//Go up stairs
function Up_Stairs() {
    Turn_Left();    
    Move();
    Turn_Left();
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
for (var x=1; x<=4; x++) {
pickUpMove();
}

//Move to bottom of stairs
Move();
Move();

//Go up the stairs
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

// Face original direction
Double_L();


// END