var array1 = [];
var array2 =[];
var result = "";

$(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    array1 = $("#item1").val().split(" ");
    array2 = [];
    array1.forEach(function(word) {
      if(word.length >= 3)
      {
        array2.push(word);
      }
      else {}
    });
    result = array2.reverse().join(" ");
    $("#myList").text(result);

  });
});