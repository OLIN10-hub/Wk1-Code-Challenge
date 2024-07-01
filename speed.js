//get speed input
let speed = parseFloat(prompt("enter speed"));
function speedDetector() {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok")
    } 
    else {
        let demeritPoints = (speed - speedLimit) / kmPerDemeritPoint
        console.log(demeritPoints)
        if(demeritPoints > 12){
            console.log("License Suspended");  
        }
                                    
    }
}
speedDetector()