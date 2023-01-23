setInterval(
    function () {
        $("#currentTime").text(moment().format("hh:mm a"))

    }, 1000);

let inputFields = document.querySelectorAll(".input-field");
let inputValues = {
    values: Array(inputFields.length).fill("")
};

if (inputFields.length) { // check for input fields' length instead of existence
    inputFields.forEach(function (inputFields, index) {
        let storedText = localStorage.getItem("inputValues" + index);
        if (storedText) {
            inputFields.value = storedText;
        }
    });

    // inputFields.forEach(function (inputFields) {
    //     inputFields.addEventListener("focus", function () {
    //         // inputFields.value = "";
    //     });
    // });

    inputFields.forEach(function (inputFields, index) {
        inputFields.addEventListener("blur", function () {
            let inputValue = inputFields.value; 
            localStorage.setItem("inputValues" + index, inputValue);
        });
    });
}