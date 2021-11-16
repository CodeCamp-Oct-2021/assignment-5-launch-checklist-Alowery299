// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })


    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("paage hasn't refreshed yet")
        alert("submit clicked");
    });   
    //     let pilotInput = document.querySelector("input[name=pilot]");
    //     let pilot = pilotInput.value;
    //     let copilotInput = document.querySelector("input[name=copilot]");
    //     let copilot = copilotInput.value;
    //     let fuelLevelInput = document.querySelector("input.[number=fuelLevel]");
    //     let fuelLevel = Number(fuelLevelInput.value);
    //     let cargoLevelInput = document.querySelector("input.[number=cargoLevel");
    //     let cargoLevel = Number(cargoLevelInput.value);

    //     formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    // })

});