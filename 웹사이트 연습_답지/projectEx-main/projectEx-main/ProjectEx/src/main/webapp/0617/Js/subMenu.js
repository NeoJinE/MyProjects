/**
 * submenu.js
 * 전체보기 메뉴 항목을 클릭했을시, submenu가 보이게끔 설정.
 */

$(function () {
  $("#AllMenushow").on("click", function () {
    if ($(this).text() == "전체보기 ▼") {
      $("#subMenuBox").css("visibility", "visible");
      $(this).text("메뉴닫기 ▲").css("color", "blue");
    } else {
      $("#subMenuBox").css("visibility", "hidden");
      $(this).text("전체보기 ▼").css("color", "black");
    }
  });
});
