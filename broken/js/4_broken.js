nameEntryField = document.getElementById("nameEntryField");
submitButton = document.getElementById("submitButton");
output = document.getElementById("dummy");

let naem = nameEntryField.value;

submitButton.addEventListener('click', function() {
    output.innerHTML = "";
    
    output.innerHTML = "Good morning, " + naem;
});

