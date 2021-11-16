// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
//              /.  <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: ${pilot} </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
   
// } ./

function validateInput(testInput) {
    let numberInput = Number(testInput) 
    if (testInput === ''){
    return "Empty"
    } else if (isNaN(numberInput)) {
    return "Not a Number"
    }
    else if(isNaN(numberInput) === false){
      return "Is a Number"  
    }
}
    


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let fuel = document.getElementById("fuelStatus");
        let cargo =  document.getElementById("cargoStatus")
        let pilotStatus = document.getElementById("pilotStatus")
        let copilotStatus = document.getElementById("copilotStatus")  
   
       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"
        || validateInput(fuelLevel)=== "Empty" || validateInput(cargoLevel) ==="Empty") {
          alert("All fields are required!");
        } else if (validateInput(pilot) === isNaN(value) || validateInput(copilot) === isNaN(value) 
         || validateInput(fuelLevel)=== isNaN(value)  || validateInput(cargoLevel) === isNaN(value))  {
            alert("Please enter valid information"); 
         } else {
            list.style.visibilty = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`  
            copilotStatus.innerHTML = `Co-Pilot ${copilot} is rady for launch.` 
            let launchStatus = document.getElementById("launchStatus") 
                if(fuelLevel < 10000 && cargoLevel >= 10000) {
                    fuel.innerHTML = "Fuel level to low for launch"
                    cargo.innerHTML = "There is too Cargo Mass for the shuttle to take off"
                    launchStatus.innerHTML = "Shuttle not ready for launch"
                    launchStatus.style.color: = 

                } else if(fuelLevel > 10000 && cargoLevel < 10000){
                    fuel.innerHTML = "Fuel level high enough for launch "
                    cargo.innerHTML = "There is enough Cargo mass for the journey."
                    launchStatus.innerHTML = "Shuttle is ready for launch"
                    id= "launchStatus".style= "color:
                }

            
         } 

};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
