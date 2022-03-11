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
  nameArea.value = "";
  event.preventDefault();
});

const validateinput = (comment, name) => {
  if (name === "" && comment === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Both fields are empty";
    return false;
  }
  if (name === "Oscar") {
    info.classList.remove("hide");
    infoText.innerHTML = "Oscar is not a valid name. </br>Menade du: Peter ?";
    return false;
  }
  if (comment === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Please enter a comment";
    return false;
  }
  if (name === "") {
    info.classList.remove("hide");
    infoText.innerHTML = "Please enter a name";
    return false;
  }
  return true;
};

const postComment = (comment, name) => {
  if (!validateinput(comment, name)) {
    return;
  }
  info.classList.add("hide");
  infoText.innerHTML = "";
  comments.unshift(comment);
  const li = document.createElement("li");
  li.className = "flex mx-auto shadow-md p-4 mx-8 mb-4 max-w-lg";
  li.innerHTML = `<span class="font-mono mx-3">${name}:</span> ${comment}`;
  commentsList.appendChild(li);
};
