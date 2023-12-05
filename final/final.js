document.getElementById("head").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "You found the secret!";
});

document.getElementById("head").addEventListener("dblclick", function () {
    document.getElementById("head").innerHTML = "...And now you fixed the secret!";
});

function submitForm () { 
    document.getElementById("submissionText").innerHTML = (`Thank you for submitting!`);
}