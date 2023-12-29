// Create a submit handler

const submitHandler = (event) => {
    // prevent default
    event.preventDefault();
    console.log("Your form was submitted");
    // using formData object;
    const formData = new FormData(event.target);

    // get park name value
    const name = FormData.get("name");
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