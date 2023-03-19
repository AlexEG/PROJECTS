const projectHistoryMainContainer = document.querySelector("#main");

projectHistoryMainContainer.innerHTML += document.getElementsByTagName(
  "main"
).innerHTML = projectHistoryComponent(
  `IIWeJHmh0xY`,
  `19`,
  `03`,
  `Mar`,
  `514`,
  `1540`,
  `324`,
  `add alot of new stuff`,
  `5814412a1274142856546231214654545`,
  [
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, architecto.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, asperiores!`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dicta, maiores?`,
  ]
);

// TODO import to all Project history files

const copySHAbtn = document.querySelectorAll("button.copy-sha");
copySHAbtn.forEach((button) => {
  const SHAvalue = button.querySelector("input.sha-value");
  const svg1 = button.querySelector(".svg-copy");
  const svg2 = button.querySelector(".svg-copied");

  button.addEventListener("click", () => {
    navigator.clipboard.writeText(SHAvalue.value);
    svg1.style.display = "none";
    svg2.style.display = "block";

    setTimeout(() => {
      svg1.style.display = "block";
      svg2.style.display = "none";
    }, 3000);
  });
});
