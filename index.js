console.log(document)

const heading = document.querySelector("h1");
console.log(heading);

const valueA = document.querySelector(".value");
console.log(valueA);

const buttonA = document.querySelector("button");
console.log(buttonA);


// querySelectorAll() will show you all elements 
// you're looking for

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

const area = document.querySelectorAll("[class*='area']");
console.log(area);

const divInsideClassStat = document.querySelector(".stat > div")
console.log(divInsideClassStat);

const hello = document.querySelector(".hello");
console.log(hello)


// Start Code //
// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
// End Code //



//produces same as code above
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }
  


  const ratingDivs = document.querySelectorAll("div.rating");
  const valuesIterator = ratingDivs.values();
  for (let value of valuesIterator) {
    console.log(value);
  }


  const areaDivs = document.querySelectorAll("div.areas");
  for (let value of areaDivs.values()) {
    console.log(value);
  }


  // Get a list of descriptions
const list = document.querySelectorAll(".description-display");

// Log them to the console
Array.prototype.forEach.call(list, function (element) {
  console.log(element);
});


// Creating list of descriptions
const descriptions = document.querySelectorAll(".description-display");


// Iterationg & Logging descriptions to console with innerText property
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  // Truncated text to < 250 characters, added ... if longer
  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>'
  }
/*
 Update HTMLElement using innerText and truncated text
 // desc.innerText = content;
  */

 // b/c of use of HTML in '' above, use innerHTML property to change element
desc.innerHTML = content; 
  console.log(content);
}

/*
Suppose that you wanted to bold any rating value that is greater than 
4.7. You would have to select all rating values, check if they match the 
condition, and add a style to those that do. You can start by selecting 
all rating values, as follows:
*/

// Select all rating values
const ratings = document.querySelectorAll('.rating-display .value')


//iterate through list and log each actual rating value using innerText
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);
// check condition ratingValue > 4.7
// set fontWeight style to bold
  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
    // using classList, replace value class with high-rating 
    rating.classList.add("high-rating");
    rating.classList.remove("value")
 
  }
  console.log(ratingValue);
}

// DYNAMICALLY ADD STATEMENT THAT STATES # OF PARKS DISPLAYED


// select all parks on the document
const parks = document.querySelectorAll(".park-display");

// get number of parks using length property
const numParks = parks.length; 

// create new, empty element
const newElement = document.createElement("div");

// use innerText to set text of element 
newElement.innerText = `${numParks} exciting parks to visit`;

//add header-statement to newElement
newElement.classList.add("header-statement");

// add element to page
//select <header> element & use appendChild() method to add new element to heade
const header = document.querySelector("header");
header.appendChild(newElement)

// you can remove DOM elements using removeChild() method

// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);

// if you comment out code above, 4th park returns
// ----- END OF "UPDATING THE DOM" LESSON ----- //




// ----- START OF "EVENT LISTENERS" LESSON ----- //

// find a select button on page
const firstBtn = document.querySelector("button");

// Then call the addEventListener() method on this button
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event)
});

// observe output in console




