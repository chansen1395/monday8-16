$(document).ready(function () {

  const elements = ["h1", "p", "img"];
  const alerts = ["This is a heading.", "This is a paragraph.", "This is an image."];

  // i = 0;
  // elements.forEach(function (element) {
  //   $(elements).click(function () {
  //     alert(alerts[i]);
  //     i ++;
  //   }
  // });

  elements.forEach(function (element) {
    $(elements).click(function () {
      $(alert(alerts[element]));
    });
  });
});