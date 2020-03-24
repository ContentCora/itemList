const black_container = document.getElementsByClassName("black_container");
const items = document.getElementsByClassName("items");
const field = document.getElementById("field");
const add = document.getElementById("add");
const remove = document.getElementById("remove");
const clear = document.getElementById("clear");

// function to add an item to div class="black_container"
function addItem() {
    const newItem = document.createElement("p");
    newItem.innerText = field.value;
    newItem.className = "black_container";
    black_container.appendChild(newItem);
}

add.addEventListener("click", addItem);

// function to remove the last paragraph that was created inside div class="black_container"
function removeLastItem() {
    const paragraphs = document.getElementsByClassName("items");
        if (paragraphs.length > 0) {
            const lastPosition = paragraphs.length -1;
            black_container.removeChild(paragraphs[lastPosition]);
    }
}

remove.addEventListener("click", removeLastItem);