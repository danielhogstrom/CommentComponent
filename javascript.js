const inputButton = document.getElementById("inputButton");
const inputArea = document.getElementById("inputArea");
const commentsList = document.getElementById("commentsList");
const info = document.getElementById("info");
const infoText = document.getElementById("infoText");
const nameArea = document.getElementById("nameArea");
let comments = [];

inputButton.addEventListener("click", (event) => {
  postComment(inputArea.value, nameArea.value);
  inputArea.value = "";
  event.preventDefault();
});

const postComment = (comment, name) => {
  if (name === "" && comment === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Both fields are empty";
    return;
  }
  if (name === "Oscar") {
    info.classList.remove("hide");
    infoText.innerHTML = "Oscar is not a valid name. </br>Menade du: Peter ?";
    return;
  }
  if (comment === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Please enter a comment";
    return;
  }
  if (name === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Please enter a name";
    return;
  }

  info.classList.add("hide");
  infoText.innerHTML = "";
  comments.unshift(comment);
  const li = document.createElement("li");
  li.innerHTML = `${name} said: </br> ${comment}`;
  commentsList.appendChild(li);
  console.log(li);
  console.log(comment);
};
