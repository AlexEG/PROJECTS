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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
  ],
  [
    `./Mar19th2023/Screenshot_1.png`,
    `./Mar19th2023/Screenshot_2.png`,
    `./Mar19th2023/Screenshot_8.png`,
    `./Mar19th2023/Screenshot_10.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_7.png`,
  ]
);

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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
  ],
  [
    `./Mar19th2023/Screenshot_10.png`,
    `./Mar19th2023/Screenshot_7.png`,
    `./Mar19th2023/Screenshot_1.png`,
    `./Mar19th2023/Screenshot_5.png`,
    `./Mar19th2023/Screenshot_6.png`,
    `./Mar19th2023/Screenshot_7.png`,
  ]
);

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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3 ",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
  ],
  [
    `./Mar19th2023/Screenshot_1.png`,
    `./Mar19th2023/Screenshot_2.png`,
    `./Mar19th2023/Screenshot_8.png`,
    `./Mar19th2023/Screenshot_10.png`,
  ]
);
//////////////
/////////////////
////////////////

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

/////////////////
/////////////////
////////////////

const allSections = document.querySelectorAll("#main > section");
//? projectHistoryComponent (phc)

allSections.forEach((phc) => {
  // // // // // // // // // // // //
  //*  Open Close Btn *//
  const OpenBtns = phc.querySelector(
    "div.yt-autoscreenshot > div > button.open-btn"
  );
  const CloseBtn = phc.querySelector(
    "div.screenshot-in-view > button.close-btn"
  );
  const Review = phc.querySelector(".see-auto-screenshots");
  OpenBtns.addEventListener("click", () => {
    Review.style.display = "block";
  });
  CloseBtn.addEventListener("click", () => {
    Review.style.display = "none";
  });
  // // // // // // // // // // // //
  //*  Screenshots bar *//

  const screenshotsImage = phc.querySelectorAll("div.screenshots > img");
  const imageInPreview = phc.querySelector("div.screenshot-in-view > img");

  // on click remove active class from all images
  function removeActive() {
    screenshotsImage.forEach((image) => {
      if (image.classList.contains("active")) {
        image.classList.remove("active");
      }
    });
  }
  // give src to the first image to be in view
  imageInPreview.src = phc.querySelector("div.screenshots > img").src;
  // give the first image class active
  phc.querySelector("div.screenshots > img").classList.add("active");

  screenshotsImage.forEach((image, i, array) => {
    // total count of images
    Review.querySelector(
      "div.screenshot-in-view > p > span:nth-child(2)"
    ).textContent = array.length;

    //  screenShot navbar
    image.addEventListener("click", () => {
      removeActive();

      imgNumber.textContent = i + 1;
      imageInPreview.src = image.src;

      if (!image.classList.contains("active")) {
        image.classList.add("active");
      }
    });
  });

  // TODO next prev btn NOT working
  // prev & next btn
  const prevImage = Review.querySelector("div.screenshot-in-view > a.prev");
  const nextImage = Review.querySelector("div.screenshot-in-view > a.next");

  nextImage.addEventListener("click", () => {
    console.log("Next Img");

    screenshotsImage.forEach((image, i, imgArr) => {
      if (image.classList.contains("active")) {
        removeActive();
        console.log(i);
        imgNumber.textContent = i + 2;
        console.log(i);
        imageInPreview.src = imgArr[i + 1].src;

        console.log(i);
      }
    });

    prevImage.addEventListener("click", () => {
      console.log("prev Image");
    });
  });
  // TODO -----------------------------------
  ////   ///   ////
  // image count
  const imgNumber = Review.querySelector(
    "div.screenshot-in-view > p > span:nth-child(1)"
  );
});
