$(document).ready(function () {

    let listElement = document.createElement("ul");
    document.getElementById("myList").appendChild(listElement);


    const flavors = ["chocolate", "vanilla", "strawberry"];

    flavors.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      listElement.appendChild(li);
    });
});