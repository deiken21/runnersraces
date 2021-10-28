
"use strict"
// How many runners in the race
const numberOfRunners = 4;

// Finish line position
const finishLine=500

// List of runners in race
let runners = []

// Configuration for a runner
/*
    Specify:
        name --> Name of the runner
        imagePath --> Where do you find the images
        numberOfFrames --> How many images are in the animation set
        typeOfImage --> What type of image is it (.png, .jpg, .gif, ...)
*/
let runners = []

setupRunners()

// On load because we need to wait for the HTML to load first
window.onload = () => {

    // Building a runner
    for(let i = 0; i < numberOfRunners; i++) {

       

        // oldrunners.push(runner)
        // Add the runner's element to the HTML page (to the body)
    }
}

function move(){
    for(let i = 0; i < runners.length; i++) {
        runners[i].position += Math.floor(Math.random() * 10)
        runners[i].element.style.left = runners[i].position + "px"
        if(runners[i].position >= finishLine) {
            alert(`${runners[i].name} wins`)
            resetRace();
        }
    }
}

function resetRace(){
    for(let i = 0; i < runners.length; i++) {
        runners[i].position = 0;
        runners[i].element.style.left = runners[i].position + "px"
    }
}

let raceInterval;
let animationInterval
let raceOngoing = false

function startRace() {
    if(!raceOngoing) {
        raceInterval = setInterval(move,50)
        animationInterval = setInterval(update, 100)
        raceOngoing = true
    }
}

function stopRace(){
    if(raceOngoing) {
        clearInterval(raceInterval)
        clearInterval(animationInterval)
        resetRace()
        raceOngoing = false
    }
}

function update() {
    for(let i = 0; i < runners.length; i++) {
        let runner = runners[i]

        runner.currentFrame++
        if(runner.currentFrame >= runner.frames.length) runner.currentFrame = 0

        runner.element.src = runner.frames[runner.currentFrame]
    }
}