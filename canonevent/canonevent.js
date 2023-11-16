document.getElementById("greeting").addEventListener("click", function () {
    document.getElementById("greeting").innerHTML = "Goodbye!";
});

document.getElementById("secretmessage").addEventListener("mouseover", function () {
    document.getElementById("secretmessage").innerHTML = "IDK, you tell me.";
    document.getElementById("secretmessage").style.backgroundColor = "white";
});

document.getElementById("secretmessage").addEventListener("mouseout", function () {
    document.getElementById("secretmessage").innerHTML = "What do you call a horse that owns a mini fridge?";
    document.getElementById("secretmessage").style.backgroundColor = "brown";
});

document.getElementById("clickme").addEventListener("dblclick", function () {
    document.getElementById("clickme").innerHTML = "...Sorry, I lost them.";
});

document.getElementById("drag").addEventListener("dragstart", function () {
    document.getElementById("drag").innerHTML = "HEY! DON'T DO THAT!!";
});

document.getElementById("dragend").addEventListener("dragend", function () {
    document.getElementById("dragend").innerHTML = "...ohh...";
});

document.getElementById("paste").addEventListener("paste", function () {
    document.getElementById("stuff").innerHTML = "Thank you!";
});

document.getElementById("copy").addEventListener("copy", function () {
    document.getElementById("copy").innerHTML = "Thanks!";
});
