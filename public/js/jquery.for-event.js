$(function () {

  // Редактирует введённый код под заданный формат. Jquery плагин.

  $("#phone").mask("+7 (999) 999-99-99");


  // Добавление свойств по наведение на одни элементы, что задействуют другие.

  $(".detox-main").on("mouseover", function () {
    $(".leaves-graph").css("filter", "drop-shadow(0px 0px 10px rgba(129, 178, 20, 1))");
  });

  $(".detox-main").on("mouseout", function () {
    $(".leaves-graph").css("filter", "none");
  });

  $(".currently-programme-top-main-description-list").on("mouseover", function () {
    $(".body-graph").css("filter", "drop-shadow(0px 0px 25px rgba(255, 204, 41, 1))");
  });

  $(".currently-programme-top-main-description-list").on("mouseout", function () {
    $(".body-graph").css("filter", "none");
  });

  $(".currently-programme-top-main-human").on("mouseover", function () {
    $(".body-graph").css("filter", "drop-shadow(0px 0px 25px rgba(255, 204, 41, 1))");
  });

  $(".currently-programme-top-main-human").on("mouseout", function () {
    $(".body-graph").css("filter", "none");
  });

  $(".transformation-game-description").on("mouseover", function () {
    $(".cube-graph").css("filter", "drop-shadow(0px 0px 25px rgba(81, 18, 129, 1))");
  });

  $(".transformation-game-description").on("mouseout", function () {
    $(".cube-graph").css("filter", "none");
  });


  // _________________________


  $(".transformation-game-cube").on("mouseover", function () {
    $(".cube-graph").css("filter", "drop-shadow(0px 0px 25px rgba(81, 18, 129, 1))");
  });

  $(".transformation-game-cube").on("mouseout", function () {
    $(".cube-graph").css("filter", "none");
  });
});
