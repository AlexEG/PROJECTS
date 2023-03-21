function project(
  title,
  wakatime,
  YT_id,
  Start,
  Status,
  languages,
  description,
  code,
  live,
  history
) {
  return `
  <section class="project">
  <h2>${title}</h2>
  <div class="project__github-repo-info">
    <img
      src="${wakatime}"
      alt="wakatime"
    />
    <img
      src="https://img.shields.io/github/commit-activity/m/AlexEG/${title}?color=%23309930&style=plastic"
      alt="GitHub commit activity"
    />
    <img
      src="https://img.shields.io/github/languages/count/AlexEG/${title}?style=plastic"
      alt="GitHub language count"
    />
    <img
      src="https://img.shields.io/github/languages/top/AlexEG/${title}?color=%239900ff&style=plastic"
      alt="top language"
    />
    <img
      src="https://img.shields.io/github/license/AlexEG/${title}?color=%2300dd&style=plastic"
      alt="GitHub Project license"
    />
    <img
      src="https://img.shields.io/github/directory-file-count/AlexEG/${title}?&style=plastic"
      alt="GitHub contributors"
    />
    <img
      src="https://img.shields.io/github/repo-size/AlexEG/${title}?color=%23ff0055&style=plastic"
      alt="GitHub repo size"
    />
    <img
      src="https://img.shields.io/github/languages/code-size/AlexEG/${title}?color=5500bb&style=plastic"
      alt="GitHub code size in bytes"
    />
  </div>
  <div class="project__inner-container">
    <div class="project__inner-container__yt-review">
      <iframe
        src="https://www.youtube.com/embed/${YT_id}"
        title=""
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="project__inner-container__project-info">
      <div class="date">
        <p><span>Start :</span> ${Start} 2023</p>
        <p><span>Project Status :</span> ${Status}</p>
      </div>
      <div class="languages">
        <img src="https://skillicons.dev/icons?i=${languages}" alt="Languages and tools" />
      </div>
    </div>
    <div class="project__inner-container__description">
      <h3>Description</h3>
      <article>
        ${description}
      </article>
    </div>
    <div class="project__inner-container__github">
      <a href="${code}">source code</a> <a href="${live}">Live review</a
      ><a href="${history}">project-history</a>
    </div>
  </div>
</section>
  `;
}

// mainContaner.innerHTML += project(
//   `title`,
//   `wakatime`,
//   `shields`,
//   `YT_id`,
//   `YT_title`,
//   `Start`,
//   `Status`,
//   `languages`,
//   `description`,
//   `code`,
//   `live`,
//   `history`
// );
