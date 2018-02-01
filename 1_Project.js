/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 03.16.2016
 *   @todo
 */

/*
Design the logic for a program for the River Falls Homes Construction Company. Design a program that prompts the user for a lot number in the River Falls subdivision,
 and data about the home to be built there including number of bedrooms, number of bathrooms, and size of garage in number of cars it holds.
 Output is the price of the home which is $50,000 base price plus $17,000 for each bedroom, $12,500 for each bathroom, and $6,000 for each car the garage holds.
 */

// Section 1
"use strict";
const PROMPT = require('readline-sync');

// Section 2
let numBed, numBath, numCars, setLotNum;
let totalBed, totalBath, totalCars, totalPrice;
const BASE_PRICE = 50000;
const BATH_PRICE = 12500;
const BED_PRICE = 17000;
const CAR_PRICE = 6000;


// Section 3
function main() {
    setLotNumber();
    numberOfBeds();
    numberOfBath();
    garageCars();
    calculateTotals();
    printResults();


}

main();

//Section 4
function setLotNumber() {
    setLotNum = PROMPT.question(`\nPlease enter a lot number in the River Falls Subdivision. : `);
}

function numberOfBeds() {
    numBed = PROMPT.question(`\nPlease enter desired amount of bedrooms.  : `);
}

function numberOfBath(){
    numBath = PROMPT.question(`\nPlease enter desired amount of bathrooms.  : `);
}

function garageCars(){
    numCars = PROMPT.question(`\nPlease enter desired garage size (in cars). : `);
}

 function calculateTotals(){
   totalBed = BED_PRICE * numBed;
   totalBath =  BATH_PRICE * numBath;
   totalCars = CAR_PRICE * numCars;
   totalPrice = BASE_PRICE + totalBed + totalBath + totalCars;
 }


function printResults() {
    console.clear();
    //process.stdout.write('\x1Bc'); //Clears the screen   You can also use console.clear() for this in new versions of NodeJs.

    console.log("\nThe price for your custom built home in the Rivers Falls Subdivision would be $"+totalPrice+".");
                                                                                                   totalPrice
}

/*
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (single/multi line, JSDoc), pragmas, data types
 */