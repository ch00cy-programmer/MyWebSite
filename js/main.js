$(document).ready(function() {
  var mHtml = $("html");
  var page = 1;

  mHtml.animate({
    scrollTop: 0
  }, 10);

  const content = "개발자 정승현의 개인공간입니다.";
  const typer = $(".typer");
  let index = 0;

  function typing() {
    if (index < content.length) {
      typer.append(content[index++]);
    }

  }

  function cursor_dely() {
    if ($(document).scrollTop() <= 600) {
      if (typer.css("border-right") === "2px solid rgb(204, 204, 204)")
        typer.css("border-right", "none");
      else
        typer.css("border-right", "2px solid rgb(204, 204, 204)");
    }
  }
  setInterval(typing, 200);
  setInterval(cursor_dely, 600);

  var location = $(".about").offset();

  $(".scroll_move").click(function(event) {

    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);

  });



});
