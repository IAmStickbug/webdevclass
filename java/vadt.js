const myName = "Stickbug"

const mySpecies = "Stickbug"

let favColor = "Green and Brown"

let age = 1

let friends = 3

let enemies = 0

stickbugProfile = {
    name: "James",
    age: 4,
    favColor: "Green",
    favThings: [3, "the sun", "trees"]
}

rockProfile = {
    name: "Rock",
    age: 5000,
    favColor: "n/a",
    favThings: [1, "N/A", "N/A"]
}

fishProfile = {
    name: "Guppy",
    age: 2,
    favColor: "Blue",
    favThings: [3, "water", "food"]
}

const para1 = document.createElement("p");
para1.innerHTML = `Hello ${myName}`;
document.getElementById("stuff").appendChild(para1);

const para2 = document.createElement("p");
para2.innerHTML = `Your species is ${mySpecies}`;
document.getElementById("stuff").appendChild(para2);

const para3 = document.createElement("p");
para3.innerHTML = `Your favorite color is ${favColor}`;
document.getElementById("stuff").appendChild(para3);

const para4 = document.createElement("p");
para4.innerHTML = `Your age is ${age}`;
document.getElementById("stuff").appendChild(para4);

const para5 = document.createElement("p");
para5.innerHTML = `You have ${friends} friends.`;
document.getElementById("stuff").appendChild(para5);

const para6 = document.createElement("p");
para6.innerHTML = `You have ${enemies} enemies.`;
document.getElementById("stuff").appendChild(para6);

const object1 = document.createElement("p");
object1.innerHTML = `Hello ${stickbugProfile.name}! You are ${stickbugProfile.age} years old. Your fav color is ${stickbugProfile.favColor}. Your fav things are ${stickbugProfile.favThings}`;
document.getElementById("stuff").appendChild(object1);

const object2 = document.createElement("p");
object2.innerHTML = `Hello ${rockProfile.name}! You are ${rockProfile.age} years old. Your fav color is ${rockProfile.favColor}. Your fav things are ${rockProfile.favThings}`;
document.getElementById("stuff").appendChild(object2);

const object3 = document.createElement("p");
object3.innerHTML = `Hello ${fishProfile.name}! You are ${fishProfile.age} years old. Your fav color is ${fishProfile.favColor}. Your fav things are ${fishProfile.favThings}`;
document.getElementById("stuff").appendChild(object3);
