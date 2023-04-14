/* <--- IMPORTANT TO READ THE COMMENTS ON THE CONSOLE.LOG SECTION(line 71) TO UNDERSTAND THE SEQUENCE OF THE ROUTE ---> */
class Elevator{
    constructor(number_of_floors){
        this.number_of_floors = number_of_floors;
        this.doorStatus = false;
        this.currentFloor = 1;
    }

showDoorStatus(){
        if(!this.doorStatus){
            return "The door's closed.";
        } else{
            return "The door's open.";
        }
    }

    showCurrentFloor(){
        return "Elevator on level: " + this.currentFloor + "/" + this.number_of_floors + ". " + this.showDoorStatus();
    }

    openDoor(){
        if(!this.doorStatus){
            this.doorStatus = true;
            return "Door open";
        } else{
            return new Error("The door's already open");
        }
    }

    closeDoor(){
        if(this.doorStatus){
            this.doorStatus = false;
            return "Door closed";
        } else{
            return new Error("The door's already closed");
        }
    }

    go_1_Up(){
        if(this.currentFloor === this.number_of_floors){
            return new Error("You're already on the top floor. You can't go higher.");
        } else{
            this.currentFloor++;
            return "Destiny: Floor " + this.currentFloor;
        }
    }

    go_1_Down(){
        if(this.currentFloor === 1){
            return new Error("You're already on the bottom floor. You can't go any lower.");
        } else{
            this.currentFloor--;
            return "Destiny: Floor " + this.currentFloor;
        }
    }

    specific_Floor(floor){
        if(floor === this.currentFloor){
            return new Error("You're already on the floor " + floor);
        } else if(floor < 1 || floor > this.number_of_floors){
            return new Error("The floor " + floor + " doesn't exist. " + this.showCurrentFloor());
        } else{
            this.currentFloor = floor;
            return "Destiny: Floor " + floor;
        }
    }
}

const elevator = new Elevator(200); //Here we establish that the elevator can go up to 200 floors.

/* <---------- CONSOLE.LOG SECTION ----------> */
//A person has just arrived at the hotel reception.
console.log("PERSON 1");
console.log(elevator.showCurrentFloor()); //The elevator on the outside indicates the floor on which the cabin is located.
console.log(elevator.openDoor()); //The person, being on the same level as the cabin, opens the door.
console.log(elevator.go_1_Up()); //Goes inside the elevator and presses an "Up" or "↑" button.
console.log(elevator.closeDoor()); //The choice having been made, the door is closed.
console.log(elevator.showCurrentFloor()); //The elevator reaches the destination and displays the current level.
console.log(elevator.openDoor()); //The door opens.
console.log('\n');

console.log("PERSON 2");
console.log(elevator.go_1_Down()); //Another person enters the elevator and presses "Down" or "↓".
console.log(elevator.closeDoor()); //The door closes.
console.log(elevator.showCurrentFloor()); //The elevator reaches the destination and displays the current level.
console.log(elevator.openDoor()); //The door opens.
console.log(elevator.closeDoor()); //The door closes.
console.log('\n');

console.log("PERSON 3");
console.log(elevator.openDoor()); //A third person enters the elevator.
console.log(elevator.specific_Floor(50)); //Presses level 50.
console.log(elevator.closeDoor()); //The door closes.
console.log(elevator.showCurrentFloor()); //Reaches level 50 and shows the current info.
console.log(elevator.openDoor()); //The door opens and the third person exits the elevator.
console.log('\n');

console.log("PERSON 4");
console.log(elevator.openDoor()); //A fourth person calls the elevator, but the door was already open.
console.log(elevator.specific_Floor(1000)); //He makes a combination of numbers to go to the 1000th floor, but the 1000th floor doesn't exist and throws the info.
console.log(elevator.specific_Floor(200)); //Then presses level 200.
console.log(elevator.closeDoor()); //The door closes to go upwards.
console.log(elevator.showCurrentFloor()); //The elevator reaches the destined floor and displays the information of the current floor.
console.log(elevator.openDoor()); //The door opens, so the 4th person can get out.
console.log(elevator.closeDoor()); //The door closes.
console.log('\n');

console.log("PERSON 5");
console.log(elevator.openDoor()); //A fifth person arrives at the elevator.
console.log(elevator.go_1_Up()); //He wants to go up 1 level, but he's already at the top level.
console.log(elevator.specific_Floor(1)); //He chooses the first level.
console.log(elevator.closeDoor()); //The door closes to go down.
console.log(elevator.showCurrentFloor()); //Arrives at the destination and displays the info.
console.log(elevator.go_1_Down()); //He chooses to go down one more floor.
console.log(elevator.openDoor()); //When the person sees that he's already reached the bottom, he chooses to get out.
console.log(elevator.closeDoor()); //The door closes.
console.log('\n');

console.log("PERSON 6");
console.log(elevator.openDoor()); //A sixth person is drunk and he wants to be on the first floor, but doesn't know which one he is currently on, so he decides to go to the elevator.
console.log(elevator.specific_Floor(1)); //The drunk guy presses level 1, and the elevator informs him that he is already there.
console.log(elevator.closeDoor()); // So he laughs and leaves the elevator.