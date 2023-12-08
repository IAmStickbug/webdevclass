document.getElementById("head").addEventListener("click", function () {
    document.getElementById("head").innerHTML = "You found the secret!";
});

document.getElementById("head").addEventListener("dblclick", function () {
    document.getElementById("head").innerHTML = "...And now you fixed the secret!";
});

function submitForm () { 
    document.getElementById("submissionText").innerHTML = (`Thank you for submitting!`);
}

document.getElementById("egg").addEventListener("click", function () {
    document.getElementById("egg").innerHTML = "00011110010110000111011101010110111";
});