setInterval(
    function () {
        $("#currentTime").text(moment().format("hh:mm a"))

    }, 1000);

let inputFields = document.querySelectorAll(".input-field");

if (inputFields.length) { // check if there are any input fields at all
    inputFields.forEach(function (inputField, index) { // loop through each input field
        let storedText = localStorage.getItem("inputValues" + index); // get the stored text for this input field to display
        if (storedText) { // checks if there is stored text equals = TRUE 
            inputField.value = storedText; // set the input field's value to what was stored in local
        }
    });
}
// Select all elements with class 'save' and store them in a variable to use latter
let saveButtons = document.querySelectorAll(".save");

// go through over each save button and add a click event listener
saveButtons.forEach(function (saveBtn, index) {
saveBtn.addEventListener("click", function () {
// Get the value of the corresponding input field
let inputValue = inputFields[index].value;
// Store the input value in local storage using the index as the key
localStorage.setItem("inputValues" + index, inputValue);
});
});