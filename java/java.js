const myName = "Stickbug"

let favColor = "Purple"

let age = 30

mainPerson = {
    name: "Stickbug",
    age: 1,
    favColor: "Green",
    favThings: [3, "the sun", "trees"]
}

favFoods = ["leaves", "twigs", "potatoes"]

const isAlive = true

// function describePerson(person) {
//     alert(`MISSING STICKBUG ALERT: ${person.name} missing since 2022, carrying his favorite leaf.`)
// }

// describePerson(mainPerson)

// if (myName === "Stickbug)"){
//     alert("You're old! Skill issue")
// }   else {
//     alert("You're young! You don't have a skill issue!")
// }

document.getElementById("below").innerHTML = `Hello ${myName}!`;

const para = document.createElement("p");
para.innerHTML = "I'm the new paragraph. BOO! Did I scare you?";
document.getElementById("div1").appendChild(para);
