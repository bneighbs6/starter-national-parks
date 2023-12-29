// Create a submit handler

const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
  
    const errors = validateForm(formData);
  
    // Clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for (let element of errorElements) {
      element.style.display = "none";
    }
  
    // Display any new errors
    Object.keys(errors).forEach((key) => {
      // Find the specific error element
      const errorElement = document.querySelector(`#${key}-form .error`);
      errorElement.innerHTML = errors[key];
      errorElement.style.display = "block";
    });
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