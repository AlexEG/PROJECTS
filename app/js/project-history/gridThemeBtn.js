document
  .querySelector("#gridThemeBtn > button")
  .addEventListener("click", () => {
    if (document.querySelector("#main").classList.contains("grid-theme")) {
      document.querySelector("#main").classList.remove("grid-theme");
    } else {
      document.querySelector("#main").classList.add("grid-theme");
    }
  });
