document.getElementById("top").addEventListener("click", function () {
    document.getElementById("top").innerHTML = "margorP gnitegduB elpmiS";
});

document.getElementById("top").addEventListener("dblclick", function () {
    document.getElementById("top").innerHTML = "Simple Budgeting Program";
});

function calcBudget () { 
    catalyst = document.getElementById("catalyst").value;
    phone = document.getElementById("phone").value;
    house = document.getElementById("house").value;
    water = document.getElementById("water").value;
    electricity = document.getElementById("electricity").value;
    taxes = document.getElementById("taxes").value;
    personal = document.getElementById("personal").value;
    budget = catalyst - phone - house - water - electricity - taxes- personal;
    
    document.getElementById("fullBudget").innerHTML = (`Your budget for the future will be ${budget}!`);
}