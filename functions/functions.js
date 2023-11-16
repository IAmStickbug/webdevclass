function tellFortune () { 
    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("name").value;
    jobTitle = document.getElementById("job").value;

    document.getElementById("fortune").innerHTML = `You will be an ${jobTitle}, married to ${partnerName} with 
    ${numOfChildren} kids. What a loser, am I right?`;
}

function calculateDogAge () {
    puppyAge = document.getElementById("dog-age").value;
    dogAge = puppyAge * 7;
    document.getElementById("age").innerHTML = `Your dog is ${dogAge} years old in dog years! I will need $20 now.`;
}

function calculateSupply () {
   age = document.getElementById("current-age").value;
   amountPerDay = document.getElementById("amount-per-day").value;
   
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    amountNeeded = (maxAge - age) * amountPerYear;
    document.getElementById("supply").innerHTML = (`You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}...should you live that long.`)
}

function calcCircumference () {
    radius = document.getElementById("radius").value;
    circumference = 2 * Math.PI * radius;
    document.getElementById("circumference").innerHTML = `The circumference is ${circumference}`;
}

const calcArea = () => console.log(`The area is ${Math.PI * radius * radius}. Breathtaking, I know.`)

function celsiusToFahrenheit () {
    celsius = document.getElementById("celsius").value;
    fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").innerHTML = `${celsius}C is ${fahrenheit}F`;
}

function fahrenheitToCelsius () {
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}F is ${celsius}C. Are you proud of yourself for not knowing basic calculations?`)
}