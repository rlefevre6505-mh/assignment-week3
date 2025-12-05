console.log("Hello world!");

//BASIC GAME LOGIC
//when the user click the cookie, the total count goes up by 1.
//whne the user clicks on the "buy" button in the shop, the total cookie count goes down by the cost amount, and the cookies per second increases by the stated amount

//we will need functions to contain the game logic, each with a task
//the shop upgrades datda must come from the provided API
//to create the logic ofr the shop upgrades either:
// 1. make function to handle each upgrade
// 2. make a reusable function that works for all upgrades (PREFERRED)

//LOCAL STORAGE
//make sure the local storage values are updated after the user buys an upgrade
// AND
//when the user clicks the cookie

//=======================================

//DATA STORAGE
let totalCookieCount = 0;
let cookiesPerSecond = 0;
//
// OR
//
let stats = {
  cookieCount: 0,
  cps: 0,
};

//if there is data already in local storage, update stats with this data, so the user picks it up where they left off

//=======================================

//SHOP UPGRADES
//fetch upgrades from API
//create DOM elements to contain upgrades(loop)

//TODO: create DOM elements for shop upgrades
//create element
//assign the value to its property (usually textContent)
//append to DOM

//after completing this you should see upgrades in your shop-container

//TODO: create function(s) to handle the purchase action
//the user needs a button to buy the item
//when the use clicks the button, 3 things need to happen:
// 1. subtrratc cost of upgrade from totalCookieCount
// 2. add increase value to cps
// 3. save new values in local storage

//=======================================

//INTERVAL

setInterval(function () {
  totalCookieCount += cps;
  //update ther DOM to reflect changes to the values
  //save values in local storage
}, 1000);

//=======================================
