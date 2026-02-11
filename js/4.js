nameEntryField = document.getElementById("nameEntryField");
submitButton = document.getElementById("submitButton");
output = document.getElementById("dummy");


submitButton.addEventListener('click', function() {
    output.innerHTML = "";
    let naem = nameEntryField.value;
    output.innerHTML = "Good morning, " + naem;
});


// NOTE: mess this one up real good