//set an event handler to the button
document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    console.log("btn-post-comment");

    //get the text written in the comment text area
    const commentTextBox = document.getElementById("comment-text-box");
    const newComment = commentTextBox.value;
    console.log(newComment);

    //get the parent node where to publish comment
    const commentContainer = document.getElementById("comment-container");
    console.log(commentContainer);

    //create comment p and set the innertext
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment");
    commentElement.innerText = newComment;

    //append the new p tag to the parent node
    commentContainer.appendChild(commentElement);
  });
