//Components
var listInput = document.querySelector(".list-input");
var listAddBtn = document.querySelector(".list-add");
var listContainer = document.querySelector(".list-container");

const addItem = (event) => {
  event.preventDefault();

  //Generate Item Container
  let listItemContainer = document.createElement("div");
  listItemContainer.classList.add("list-item");

  let itemText = document.createElement("span");
  itemText.classList.add("item-text");
  itemText.innerText = listInput.value;
  listItemContainer.appendChild(itemText);

  let itemAction = document.createElement("button");
  itemAction.innerText = "x";
  itemAction.classList.add("item-action");
  listItemContainer.appendChild(itemAction);

  listContainer.appendChild(listItemContainer);
  listInput.value = "";
};

const deleteItem = (event) => {
  let currentItem = event.target;
  console.log(currentItem);
  if (currentItem.classList[0] === "item-action") {
    let parentElement = currentItem.parentElement;
    parentElement.remove();
  }
};

listAddBtn.addEventListener("click", addItem);
listContainer.addEventListener("click", deleteItem);
