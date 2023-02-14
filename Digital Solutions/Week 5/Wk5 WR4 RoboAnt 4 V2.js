//Wk5 WR4 V2.0

//Increase Speed
Change_Delay_To(100);

//Variables
var counters = 0;   // Amount of markers



//  Functions
//Turn Right
function turnRight() {
    for (var x=1; x<=3; x++) {
    Turn_Left();
    }
}

//Move around map and pick up all markers
function moveAndMarkers() {
    if (On_A_Marker()) {
        while(On_A_Marker()) {
            Pick_Up_Marker();
            counters++;
            Say('%'+counters/121*100);
        }
    }
    else { 
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



//      Sequence
//Move to starting position
Move();
Turn_Left();

for (var x=1; x<=3; x++) {
Move();
}

endR();

//Start collection of Markers
for (var x=1; x<=10; x++) { //Row 1
moveAndMarkers();
}

endL(); //Turn around into next row

for (var x=1; x<=10; x++) { //Row 2
moveAndMarkers();
}

endR(); //Turn around into next row

for (var x=1; x<=10; x++) { //Row 3
moveAndMarkers();
}

endL(); //Turn around into next row

for (var x=1; x<=9; x++) { //Row 4
moveAndMarkers();
}

endR(); //Turn around into next row

for (var x=1; x<=9; x++) { //Row 5
moveAndMarkers();
}

//Go into loading bay and drop all markers
Turn_Left();
Move();

while (Any_Markers_In_Marker_Bag()) {   //Drops all markers
    Put_Down_Marker();
}

//Return to starting shed
Turn_Left();
Turn_Left();

for (var x=1; x<=6; x++) {
Move();
}

turnRight();

for (var x=1; x<=3; x++) {
Move();
}

endL();
Turn_Left();


//END