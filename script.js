const container = document.getElementById("container");

const par = document.createElement("p");
par.style.color = "red";
par.textContent = "Hey I'm red!";
container.appendChild(par);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div2 = document.createElement("div");
div2.style.border = "5px solid black";
div2.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div2.appendChild(h1);

const par2 = document.createElement("p");
par2.textContent = "ME TOO!";
div2.appendChild(par2);

container.appendChild(div2);
