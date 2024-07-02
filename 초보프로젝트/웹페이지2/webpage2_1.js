document.addEventListener("DOMContentLoaded", () => {
  let asideLinks = document.querySelectorAll(".aside a");
  asideLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("href");
      window.open(url, "_blank");
    });
  });
});
