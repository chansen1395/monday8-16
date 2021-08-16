$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();

    // Empties the div for a new list
    $("#myList").empty();
    $("#myList").hide();
    $("#form1").show();

    // let list = document.getElementById("myList");
    let listElement = document.createElement("ul");
    document.getElementById("myList").appendChild(listElement);


    var groceries = [$("#item1").val(), $("#item2").val(), $("#item3").val()];
    groceries = groceries.map(function(g) { 
      return g.toUpperCase(); 
    })
    groceries.sort();
    $("#form1").hide();


    groceries.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      listElement.appendChild(li);
      $("#myList").show();
      $("#form1").hide();

    });
  });
});