// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    //                <h2>Mission Destination</h2>
    //                 <ol>
    //                     <li>Name: ${pilot} </li>
    //                     <li>Diameter: </li>
    //                     <li>Star: ${star}</li>
    //                     <li>Distance from Earth: </li>
    //                     <li>Number of Moons: </li>
    //                 </ol>
    //                 <img src="">

     } 

    function validateInput(testInput) {
        // let numberInput = Number(testInput)
        if (testInput === '') {
            return "Empty"
        } else if (isNaN(testInput)) {
            return "Not a Number"
        }
        else if (isNaN(testInput) === false) {
            return "Is a Number"
        }
    }



    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let fuel = document.getElementById("fuelStatus");
        let cargo = document.getElementById("cargoStatus")
        let pilotStatus = document.getElementById("pilotStatus")
        let copilotStatus = document.getElementById("copilotStatus")

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"
            || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required!");
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number"
            || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
            alert("Please enter valid information");
        } else {
            console.log(list)
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
            copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch.`
            let launchStatus = document.getElementById("launchStatus")
            if (fuelLevel < 10000 && cargoLevel >= 10000) {
                fuel.innerHTML = "Fuel level to low for launch"
                cargo.innerHTML = "There is too much Cargo Mass for the shuttle to take off"
                launchStatus.innerHTML = "Shuttle not ready for launch"
                launchStatus.style.color = "red";


            } else if (fuelLevel > 10000 && cargoLevel < 10000) {
                fuel.innerHTML = "Fuel level high enough for launch "
                cargo.innerHTML = "Cargo mass is low enough for the journey."
                launchStatus.innerHTML = "Shuttle is ready for launch"
                launchStatus.style.color = "green";
            }else if (fuelLevel > 10000 && cargoLevel > 10000) {
                fuel.innerHTML = "Fuel level high enough for launch "
                cargo.innerHTML = "To much Cargo mass for the journey."
                launchStatus.innerHTML = "Shuttle is not ready for launch"
                launchStatus.style.color = "red";
            }else if (fuelLevel < 10000 && cargoLevel < 10000) {
                fuel.innerHTML = "Fuel level not high enough for launch "
                cargo.innerHTML = "Cargo mass is low enough for the journey."
                launchStatus.innerHTML = "Shuttle is not ready for launch"
                launchStatus.style.color = "red";
            }


        }

    };


    async function myFetch() {
        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            return response.json();
        });

        return planetsReturned;
    }

    function pickPlanet(planets) {
        let index = Math.floor(Math.random() * planets.length);
        return planets[index];
    }




    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;
