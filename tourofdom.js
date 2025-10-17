// jodi kono tag er vitore ja text ache oigula soho dekhte chai
const licollection = document.getElementsByTagName("li");
console.log(licollection);
for (const li of licollection) {
  console.log(li.innerText);
}

// jodi kono id er vitore ki ache dekhte chai
const title = document.getElementById("food-title");
console.log(title);

// jodi kono tag er vitorer likha change korte chai
const head = document.getElementById("heading");
console.log(head);
head.innerText = "HELLO EVERYONE! FROM:-";
// kono likhar color,bg color,margin,padding,alignments,border related etc change korte chaile
head.style.color = "black";
//collection of the classlist
head.classList.add("bold");
//mouse hover korle likha uthbe
head.setAttribute("heading", "title or tooltip by js ");

//all section e style korte chaile
const sections = document.querySelectorAll("section");
for (const section of sections) {
  console.log(section);
  section.style.border = "2px solid black";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "10px";
}

// //parentnode er vitore chilnode dekhte chaile
// document.getElementById("players-container").childNodes;

// //kono element create korte chaile
// document.createElement("p");

const newchild = document.createElement("li");
newchild.innerText = "new born baby";
console.log(newchild);
const playersList = document.getElementById("player-list");
playersList.appendChild(newchild);
