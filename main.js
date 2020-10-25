"use strcict";

function main() {
  console.log("ei");
  // your code goes here.
  let myPenguin = {
    name: "Penguins",
    origin: "Penguin Island",
    author: "Anatole France",
  };
  console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}`);
  myPenguin.canFly = false;

  myPenguin.chirp = () => {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
  };
  myPenguin.sayHello = () => {
    console.log(`Hello, I'm a penguin and my name is ${this.name}`);
  };
  myPenguin.sayHello();
  myPenguin.name = "Penguin McPenguinFace";
  myPenguin.sayHello();
  myPenguin.fly = () => {
    myPenguin.canFly
      ? console.log("I can fly!")
      : console.log("No flying for me!");
  };
  myPenguin.fly();
  myPenguin.canFly = true;
  myPenguin.fly();
  const keysArr = Object.keys(myPenguin);
  keysArr.forEach((elem) => console.log(elem));
}

window.addEventListener("load", main);
