// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
var spacecraftName: string = 'Determination';
var speedMph: number = 17500;
var kilometersToMars: number = 225000000;
var kilometersToTheMoon: number = 384400;
var milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars


// Code an output statement here (use a template literal):
console.log(`${spacecraftName} would take ${kilometersToTheMoon*milesPerKilometer/speedMph} days to get to Mars.`);



// Part 3: Create a Function ("getDaysToLocation")


// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
function getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * milesPerKilometer;
    let hours: number = milesAway / speedMph;
    return hours / 24;
 }

 console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
 console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);
 


// Part 4: Create a Spacecraft Class


// Create an instance of the class here:
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
 
    constructor(name: string, speedMph: number) {
       this.name = name;
       this.speedMph = speedMph;
    }
 
    getDaysToLocation(kilometersAway: number): number {
       let milesAway: number = kilometersAway * this.milesPerKilometer;
       let hours: number = milesAway / this.speedMph;
       return hours / 24;
    }
 
    printDaysToLocation(location: SpaceLocation) {
       console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }
    
    
 }


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.


// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
