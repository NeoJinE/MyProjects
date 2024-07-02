/**
 * slideShow.js
 */

$(function () {
  //1.이동한 이미지의 index값을 저장하기 위한 변수선언.(현재 위치 이미지의 idx)
  let movedIndex = 0; //첫번째 이미지의 idx

  //1-1.슬라이드 패널을 움직여 주는 함수 => idx값을 전달받아서, 해당 idx로 이동.
  //1-2.prev, next버튼 모두 이 함수를 호출한다.
  function moveSlide(index) {
    //왼쪽을 기준으로 왼쪽이동거리: idx * 1280px
    //2.전달받은 idx값을 movedIndex에 저장.
    movedIndex = index;

    //3.슬라이드 이동거리 계산 : 왼쪽으로 이동거리를 계산=> 왼쪽의 여백을 줄인다. =>
    let moveLeft = -(1280 * index);
    $("#slidePanel").animate({ left: moveLeft }, "slow");
  }

  //prev버튼 클릭하면, 앞 이미지로 이동, 첫번쨰 이미지는(idx = 0)라면, 이동할 곳이 x => idx변환 x
  $("#prevButton").on("click", function () {
    if (movedIndex != 0) {
      //첫번쨰 이미지가 아니면
      movedIndex = movedIndex - 1; //idx값을 1 감소
    }
    moveSlide(movedIndex);
  });
  //next버튼 클릭하면, 뒤 이미지로 이동, 마지막 이미지(idx = 4)라면, 이동할 곳이 x => idx변환 x
  $("#nextButton").on("click", function () {
    if (movedIndex != 4) {
      //현재 이미지가 마지막 이미지가 아니면
      movedIndex = movedIndex + 1; //idx값을 1 증가.
    }
    moveSlide(movedIndex);
  });

  //초기 슬라이더 (이미지)위치 랜덤하게 지정=> Math.random() => 0.0~0.9999999..까지 표현
  //이미지 idx는 0~4까지 저장.
  let randomNumber = Math.floor(Math.random() * 5);
  moveSlide(randomNumber); //document.ready의 이벤트 발생시,(정적태그요소 준비되면 실행.)

  //컨트롤 패널의 각 컨트롤 버튼에 대해서 작업
  //컨트롤 버튼 이미지에 동일한 효과를 부여. => 배열형태로 참조하여, 각각 버튼에 개별 효과가 들어가기위해 each()메서드 사용.
  //컨트롤 버튼 idx와 보여야할 이미지 idx가 동일하므로, 선택된 컨트롤 버튼의 idx값이 들어와야 한다.
  $(".controlButton").each(function (index) {
    //마우스 올렸을때, 이미지변경. (hover)
    $(this).hover(
      function () {
        //마우스 올렸을때 실행할 코드 => 이미지변경(button2로 변경)
        $(this).attr("src", "image/controlButton2.png");
      },
      function () {
        //마우스 뗐을때, 실행할 코드 => 이미지변경(button1로 변경)
        $(this).attr("src", "image/controlButton1.png");
      }
    ); //hover이벤트 종료.

    //컨트롤버튼 클릭시, moveSlide()를 호출한다.
    $(this).on("click", function () {
      moveSlide(index);
    });
  });
}); //종료
