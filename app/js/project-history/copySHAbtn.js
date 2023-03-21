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
