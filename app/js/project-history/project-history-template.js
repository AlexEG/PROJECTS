function projectHistoryComponent(
  projectName,
  SHA,
  YT,
  whatChange,
  autoscreenshot
) {
  let whatChangeHTML = "";
  function addText(text) {
    whatChangeHTML += `<li><p>${text}</p></li>`;
  }
  whatChange.map((ele) => addText(ele));

  let autoscreenshotHTML = "";
  function addImage(screenshot) {
    autoscreenshotHTML += `<img src="${screenshot}" alt="Auto Screenshot" />`;
  }
  autoscreenshot.map((ele) => addImage(ele));

  // GITHUB API
  fetch(`https://api.github.com/repos/AlexEG/${projectName}/git/commits/${SHA}`)
    //  Project's Create Date
    .then((response) => response.json())
    .then((data) => {
      // Commit Date
      document.querySelector(
        `#main > section#SHA_${SHA.slice(
          0,
          7
        )} > div.commit-description > p.commit-time > time`
      ).innerHTML = `${data.author.date.slice(0, 10)}`;

      // Commit Title
      document.querySelector(
        `#main > section#SHA_${SHA.slice(
          0,
          7
        )} div.commit-description > div.github-commit > h2`
      ).innerHTML = `${data.message}`;
    });

  ///

  ///
  fetch(`https://api.github.com/repos/AlexEG/${projectName}/commits/${SHA}`)
    .then((response) => response.json())
    .then((data) => {
      // number of changed files
      document.querySelector(
        `#main > section#SHA_${SHA.slice(
          0,
          7
        )} > div.commit-description > p.commit-title > span:nth-child(2)`
      ).innerHTML = `${data.files.length}`;

      // additions lines of code
      document.querySelector(
        `#main > section#SHA_${SHA.slice(
          0,
          7
        )} > div.commit-description > p.commit-title > span:nth-child(3)`
      ).innerHTML = `+${data.stats.additions}`;

      // deletions lines of code
      document.querySelector(
        `#main > section#SHA_${SHA.slice(
          0,
          7
        )} > div.commit-description > p.commit-title > span:nth-child(4)`
      ).innerHTML = `-${data.stats.deletions}`;
    });

  return `
  <section id="SHA_${SHA.slice(0, 7)}">
  <div class="yt-autoscreenshot">
    <div class="wrapper">
      <iframe
        src="https://www.youtube.com/embed/${YT}"
        frameborder="0"
        allowfullscreen></iframe>

        <div class="see-auto-screenshots" style="display: none">
          <div class="wrapper-screenshots">
            <div class="screenshot-in-view">
              <img src="" alt="Auto Screenshot" />
              <p class="img-number"><span>1</span> / <span></span></p>
              <a class="prev">&#10094;</a>
              <a class="next">&#10095;</a>
              <button class="close-btn">x</button>
            </div>
            <div class="screenshots">
              ${autoscreenshotHTML}
            </div>
          </div>
        </div>

      <button class="open-btn">See Work in Progress Updates</button>
    </div>
  </div>
  <div class="commit-description">
    <p class="commit-time">
      <time></time>
    </p>
    <p class="commit-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <g color="green">
          <path
            d="M224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H160V320c0 17.7 14.3 32 32 32s32-14.3 32-32V208H336c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V32zM0 480c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"
          />
        </g>
      </svg>
      <span>111111</span>Changed files
      <span></span>additions<span></span>deletions
    </p>
    <div class="github-commit">
      <h2></h2>
      <div class="github-commit__view-btn">
        <button aria-label="Copy the full SHA" class="copy-sha tooltip">
          <input
            class="sha-value"
            type="text"
            value="${SHA}"
            hidden
          />
          <svg
            class="svg-copy"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
          >
            <path
              d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
            ></path>
            <path
              d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
            ></path>
          </svg>

          <svg
            class="svg-copied"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
          >
            <path
              d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
            ></path>
          </svg>
        </button>
        <a
          class="tooltip"
          href="https://github.com/AlexEG/${projectName}/commit/${SHA}"
          target="_blank"
          >${SHA.slice(0, 7)}</a
        >
        <a
          class="tooltip"
          class="browse-repo-history"
          href="https://github.com/AlexEG/${projectName}/tree/${SHA}"
          target="_blank"
          ><svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
          >
            <path
              d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="commit-description__summary">
      <ul>
      ${whatChangeHTML}
      </ul>
    </div>
  </div>
</section>
  `;
}

// projectHistoryComponent(
//   `YT`,
//   `dd`,
//   `mm`,
//   `month`,
//   `files`,
//   `additions`,
//   `deletions`,
//   `commitTitle`,
//   `SHA`,
//   [`whatChange1`, `whatChange2`, `whatChange3`],
//   [
//   `./Mar19th2023/Screenshot_1.png`,
//   `./Mar19th2023/Screenshot_2.png`,
//   `./Mar19th2023/Screenshot_8.png`,
//   `./Mar19th2023/Screenshot_10.png`,
// ]
// );
