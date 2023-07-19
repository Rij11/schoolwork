//Wk5 WR4 V3.0


//Increase Speed
Change_Delay_To(100);

//Marker coutner variable
var counters = 0;


//  Functions

//Turn Right
function turnRight() {
    for (var x=1; x<=3; x++) {
    Turn_Left();
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

//Markers
function markers() {
    while (On_A_Marker()) {
        Pick_Up_Marker();
    }
}



//      Sequence

//      Move to starting position
Move();
Turn_Left();

for (var x=1; x<=3; x++) {
Move();
}

endR();

//      Start collection of Markers
for (var z=1; z<=2; z++) {
    for (var x=1; x<=8; x++) {
    markers();
    Move();
    }
    
    endL();
    
    for (var x=1; x<=9; x++) {
    markers();
    Move();
    }  
    
    endR();
}

//      Go into loading bay and drop all markers
for (var x=1; x<=8; x++) {
markers();
Move();
}

Turn_Left();
Move();

while (Any_Markers_In_Marker_Bag()) {   //Drops all markers
    Put_Down_Marker();
}

//      Return to starting shed
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