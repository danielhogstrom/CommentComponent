const inputButton = document.getElementById("inputButton");
const inputArea = document.getElementById("inputArea");
const commentsList = document.getElementById("commentsList");
let comments = [];

inputButton.addEventListener("click", (event) => {
  postComment(inputArea.value);
  console.log(comments);
  event.preventDefault();
});

const postComment = (comment) => {
  comments.unshift(comment);
};
