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






//
/**
Write a statement that will find all elements on the page containing stars that are not shaded.

Replace the entire string with your own code.
// star full rating
*/
const halfStars = document.querySelectorAll("span.star.half");
console.log(halfStars);

/**
 Write a statement that will find the Gateway Arch park element by its ID.
*/
const gatewayArch = document.querySelector("#ganp");
console.log(gatewayArch);

/**
Write a statement that will find the element containing the established date for the Gateway Arch park.
*/
const established = gatewayArch.querySelector("div.established > div.value");
console.log(established);