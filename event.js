//evabeo style kora jay
// const button = document.getElementById("btn");
// button.onclick = function makeWhatever() {
//   document.body.style.backgroundColor = "brown";
// };

//add eventlistener to style
document
  .getElementById("btn")
  .addEventListener("click", function makeWhatever() {
    console.log(7777);
    document.body.style.backgroundColor = "green";
  });

//update heading title
document.getElementById("btn-update").addEventListener("click", function () {
  const pageTitle = document.getElementById("page-title");
  console.log(pageTitle);
  pageTitle.innerText = "updated page title text";
});
