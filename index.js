// Create a submit handler

const submitHandler = (event) => {
    // prevent default
    event.preventDefault();
    console.log("Your form was submitted");
    // using formData object;
    const formData = new FormData(event.target);

    // get park name value
    const name = formData.get("name");
    console.log(name);
}

// Then add main() function that creates event listener for the form submission
const main = () => {
    // Get form element
    const form = document.querySelector("#park-form");

    // Attach the submit handler
    form.addEventListener("submit", submitHandler);
}

// Add event listener for DOMContenetLoaded that invokes main() function
window.addEventListener("DOMContentLoaded", main);

// Add validate function for required fields
function validateExists(value) {
    return value && value.trim();
}

// Add validateForm function
function validateForm(formData) {
    const errors = {};
  
    // Check if name was entered
    if (!validateExists(formData.get("name"))) {
      errors.name = "Please enter a name";
    }
  
    // Check if rating was entered
    if (!validateExists(formData.get("rating"))) {
      errors.rating = "Please enter a rating";
    }
  
    // Check if description was entered
    if (!validateExists(formData.get("description"))) {
      errors.description = "Please enter short description";
    }
  
    // Check if established date was entered
    if (!validateExists(formData.get("established"))) {
      errors.established = "Please enter date";
    }
  
    // Check if area was entered
    if (!validateExists(formData.get("area"))) {
      errors.area = "Please enter the area of the park";
    }
  
    // Check if location date was entered
    if (!validateExists(formData.get("location"))) {
      errors.location = "Please enter the location of the park";
    }
  
    return errors;
  }