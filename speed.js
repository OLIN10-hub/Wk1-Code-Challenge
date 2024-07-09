var prompt = require('prompt-sync')();

let isSpeedInput = prompt('Enter speed ');
let speed = parseInt(isSpeedInput);



//get speed input
function speedDetector() {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok")
    } 
    else {
        let demeritPoints = parseInt((speed - speedLimit) / kmPerDemeritPoint)
        if(demeritPoints > 12){
            console.log("License Suspended");  
        }
        else{
            console.log(demeritPoints)
        }
                                    
    }
}
speedDetector()