// parent node
const mainContainer = document.getElementById("main-container");

// create child node
const placesSection = document.createElement("section");

//create h1
const h1 = document.createElement("h1");
h1.innerText = "Places I want to visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "bandorbon";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "bandorbon";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "bandorbon";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "bandorbon";
ul.appendChild(li4);

//append ul to the section
placesSection.appendChild(ul);

//append section to the main container
mainContainer.appendChild(placesSection);

// //easier to create HTML
// const booksSection = document.createElement("section");

// booksSection.innerHTML =
// <h1>Books I need to read</h1>
// <ul>
//     <li>Physics</li>
//     <li>Chemistry</li>
//     <li>Math</li>
//     <li>Biology</li>
// </ul>

// mainContainer.appendChild(booksSection);
