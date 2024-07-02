//1. 메뉴항목 열고닫는 이벤트함수 작성
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

  //1-1메뉴바를 상단고정하는 이벤트
  $(window).on("scroll", function () {
    if ($(document).scrollTop() >= $("#headerBox").height()) {
      $("#mainMenuBox").addClass("mainMenuFixed mainMenuShadow");
    } else {
      $("#mainMenuBox").removeClass("mainMenuFixed mainMenuShadow");
    }
  });

  //2. 이미지 슬라이드쇼 이벤트작성

  //2-1. 슬라이드 이동거리 계산
  let movedIdx = 0;
  function moveSlide(index) {
    movedIdx = index;
    let moveLeft = -(1280 * index);
    $("#slidePanel").animate({ left: moveLeft }, "slow");
  }

  //2-2.prev버튼 클릭시, 앞 이미지로 이동.
  $("#prevButton").on("click", function () {
    if (movedIdx == 0) {
      movedIdx = 4;
    } else {
      movedIdx = movedIdx - 1;
    }
    moveSlide(movedIdx);
  });

  $("#nextButton").on("click", function () {
    if (movedIdx == 4) {
      movedIdx = 0;
    } else {
      movedIdx = movedIdx + 1;
    }
    moveSlide(movedIdx);
  });

  //2-3. 초기 슬라이드 이미지 랜덤지정
  let randomNumber = Math.floor(Math.random() * 5);
  moveSlide(randomNumber);

  //2-4.컨트롤 버튼 누를시, 이미지변경 + 버튼색변경
  $(".controlButton").each(function (index) {
    $(this).hover(
      function () {
        $(this).attr("src", "image/controlButton2.png");
      },
      function () {
        $(this).attr("src", "image/controlButton1.png");
      }
    );
    $(this).on("click", function () {
      moveSlide(index);
    });
  });

  //2-5. 3초 간격으로 이미지 슬라이드 이벤트설정
  setInterval(function () {
    if (movedIdx != 4) movedIdx += 1;
    else movedIdx = 0;
    moveSlide(movedIdx);
  }, 5000);

  //tabMenu에서 클릭시, tabMenu이미지변경 + tabContent이미지변경 이벤트 생성
  let $tabContent = $("#tabContent div");

  $("#tab li:first-child").addClass("selectedItem");
  $("#tab li").on("click", function () {
    let idx = $(this).index();

    $("#tab li").removeClass("selectedItem");
    $(this).addClass("selectedItem");
    $tabContent.css("display", "none");
    $tabContent.eq(idx).css("display", "block");
  });

  //top버튼 누르면 상단으로 이동하는 이벤트
  $("#moveToTopBox").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 1);
  });
});
