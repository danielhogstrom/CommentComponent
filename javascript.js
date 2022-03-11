const inputButton = document.getElementById("inputButton");
const inputArea = document.getElementById("inputArea");
const commentsList = document.getElementById("commentsList");
const info = document.getElementById("info");
const infoText = document.getElementById("infoText");
const nameArea = document.getElementById("nameArea");
const likeButton = document.querySelector(".likeSymbol");
const likeButtonSymbol = "&#128077";

let comments = [];

inputButton.addEventListener("click", (event) => {
  postComment(inputArea.value, nameArea.value);
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
  let id = 0;
  const commentObj = { id: id, name: name, comment: comment, isLiked: true };
  id++;
  inputArea.value = "";
  nameArea.value = "";
  info.classList.add("hide");
  infoText.innerHTML = "";
  comments.unshift(commentObj);
  comments.map((c) => {
    commentsList.innerHTML += `<li class="flex mx-auto shadow-md p-4 mx-8 mb-4 max-w-lg">
    <span class="name">${c.name}:</span> ${c.comment} <span onclick="like(${
      c.id
    })">${c.isLiked ? "&#128077;&#127995;" : "&#129307;&#127995; "}
    </span>
    </li>`;
  });
};

const like = (id) => {
  for (let comment in comments) {
  }
};
