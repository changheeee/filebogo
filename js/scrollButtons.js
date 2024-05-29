document.addEventListener("DOMContentLoaded", function () {
  var scrollStep = 200; // 스크롤 움직이는 거리 (픽셀 단위)

  // 스크롤 버튼 클릭 이벤트 리스너 등록
  var buttons = document.querySelectorAll("#scrolltotop, .scrollupdown");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var direction = this.dataset.direction;
      if (direction === "up") {
        window.scrollBy(0, -scrollStep); // 위로 스크롤
      } else if (direction === "down") {
        window.scrollBy(0, scrollStep); // 아래로 스크롤
      } else if (direction === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" }); // 맨 위로 스크롤
      }
    });
  });
});
