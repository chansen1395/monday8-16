$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const arrayWords = [];
    const arrayClass = [];
    const arrayID = [];

    arrayID.push("input#person1", "input#person2", "input#animal", "input#exclamation", "input#verb", "input#noun");
    arrayClass.push(".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun");


    arrayID.forEach((item) => {
      arrayWords.push($(item).val());
    });

    alert(arrayWords);
    alert(arrayClass);

    i = 0
    arrayWords.forEach((item) => {
      $(arrayClass[i]).text(item);
      i ++ ;
    });


    // i = 1
    // inputs.forEach(function(input) {
    //   $(".span" + i.toString()).text(input);
    //   i ++
    // });

    $("#story").show();

  });
});
