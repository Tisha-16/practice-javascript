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
