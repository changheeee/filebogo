// 공통 컴포넌트 로드
function loadComponent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${elementId}:`, error));
}

// 페이지 로드 시 각 컴포넌트 로드
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("/components/menu.html", "menu_container");
  loadComponent("/components/footer.html", "footer");
});
