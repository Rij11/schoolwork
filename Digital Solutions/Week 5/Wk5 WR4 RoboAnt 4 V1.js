//Wk5 WR4 V1.0

//Increase Speed
Change_Delay_To(100);

//Variables
var counters = 0;   // Amount of markers


//Functions

//Turn Right
function turnRight() {
    for (var x=1; x<=3; x++) {
    Turn_Left();
    }
}

//Pick up markers
function marker() {
    while(On_A_Marker()) {
        Pick_Up_Marker();
        counters++;
        Say('%'+counters/121*100);
    }
}

//Move around map and pick up all markers
function moveAndMarkers() {
    if (On_A_Marker()) {
        marker();
    }
    else if (Front_Is_Clear()) {
        Move();
    }
    
}

//Turn right at end of row
function endR() {
    turnRight();
    Move();
    turnRight();
}

//Turn right at end of row
function endL() {
    Turn_Left();
    Move();
    Turn_Left();
}


//Sequence

//Move to starting position
Move();
Turn_Left();

for (var x=1; x<=4; x++) {
Move();
}

endR();

//Start collection of Markers

for (var x=1; x<=12; x++) {
moveAndMarkers();
}

endL();

for (var x=1; x<=12; x++) {
moveAndMarkers();
}

endR();

for (var x=1; x<=12; x++) {
moveAndMarkers();
}

endL();

for (var x=1; x<=11; x++) {
moveAndMarkers();
}

endR();

for (var x=1; x<=10; x++) {
moveAndMarkers();
}

//Go into loading bay and drop all markers
Turn_Left();
Move();

while (Any_Markers_In_Marker_Bag()) {
    Put_Down_Marker();
}

//Return to starting shed
Turn_Left();
Turn_Left();

for (var x=1; x<=6; x++) {
Move();
}

turnRight();
Move();
Move();
Move();
endL();
Turn_Left();


//END