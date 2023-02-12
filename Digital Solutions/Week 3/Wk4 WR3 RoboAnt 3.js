//Increase speed
Change_Delay_To(100);


//Functions

//Turn Right
function turnRight() {
    for (var x=1; x<=3; x++) {
    Turn_Left();
    }
}

//Moves to table
function toTable() {
    while (Front_Is_Clear()) {
        Move();
    }
}

//Move around table
function aroundTable() {
    turnRight();    //Faces downwards
    for (var x=1; x<=4; x++) {  //Moves down 4 spaces
    Move();
    }
    Turn_Left();    //Faces Counter
    Move();
    Pick_Up_Marker();   //Picks up marker
    Turn_Left();
    Turn_Left();
}

//Moves to Acid bath, then goes inside and drops marker
function acidBath() {   
    while (Front_Is_Clear()) {
        Move();
    }
    if (Front_Is_Blocked()) {
        turnRight();
    }
    Move();
    Turn_Left();
    Move();
    Turn_Left();
    Move();
    Put_Down_Marker();
}


//Sequence

// Face Upwards
Turn_Left();

//Go upwards
for (var x=1; x<=5; x++) {
Move();
}

//Face Table
turnRight();

//Goes to table -- stops infront of it
toTable();

//Goes around table and pciks up marker
aroundTable();

//Go to acid bath
acidBath();

// Returns back to start
Turn_Left();
Turn_Left();

//Go upwards
for (var x=1; x<=4; x++) {
Move();
}

Turn_Left();    //Go towards wall

for (var x=1; x<=6; x++) {
Move();
}

Turn_Left();

for (var x=1; x<=5; x++) {
Move();
}

//END