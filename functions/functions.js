function tellFortune () {
    e.preventDefault();
    
    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("name").value;
    location = document.getElementById("location").value;
    jobTitle = document.getElementById("job").value;

    document.getElementById("fortune").innerHTML = `You will be an ${jobTitle} in ${location}, married to ${partnerName} with 
    ${numOfChildren} kids. What a loser, am I right?`;
}

function calculateDogAge (puppyAge) {
    dogAge = puppyAge * 7;
    console.log(`Your dog is ${dogAge} years old in dog years! I will need $20 now.`)
}

function calculateSupply (age, amountPerDay) {
    maxAge = 80;
    amountPerYear = amountPerDay * 365.25;
    amountNeeded = (maxAge - age) * amountPerYear;
    console.log(`You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}...should you live that long.`)
}

function calcCircumference (radius) {
    circumference = 2 *Math.PI * radius;
    console.log(`The circumference is ${circumference}. Neat.`)
}

const calcArea = (radius) => console.log(`The area is ${Math.PI * radius * radius}. Breathtaking, I know.`)

function celsiusToFahrenheit (celsius) {
    fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius}C is ${fahrenheit}F. I have no words.`)
}

function fahrenheitToCelsius (farenheit) {
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}F is ${celsius}C. Are you proud of yourself for not knowing basic calculations?`)
}