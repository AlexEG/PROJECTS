function project(projectName, wakatime, YT_id, Status, languages) {
  let languagesHTML = "";
  function addIcon(icon) {
    languagesHTML += `<img src="./assets/icons/${icon}.svg" alt="Languages and Tools that I used in this project" />`;
  }
  languages.map((ele) => addIcon(ele));

  // GITHUB API
  fetch(`https://api.github.com/repos/AlexEG/${projectName}`)
    //  Project's Create Date
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(
        `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(1) > span`
      ).innerHTML = `${data.created_at.slice(0, 10)}`;

      // Last Update
      document.querySelector(
        `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(2) > span`
      ).innerHTML = `${data.updated_at.slice(0, 10)}`;

      // license
      document.querySelector(
        `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__project-info > div.date > p:nth-child(3) > span`
      ).innerHTML = `${data.license.name}`;

      // Project's description
      document.querySelector(
        `#projectsContainer > section.${projectName} > div.project__inner-container > div.project__inner-container__description > article`
      ).innerHTML = `${data.description}`;
    });

  return `
  <section class="project ${projectName}">
  <h2>${projectName}</h2>
  <div class="project__github-repo-info">
    <img
      src="${wakatime}"
      alt="wakatime"
    />
    <img
      src="https://img.shields.io/github/commit-activity/m/AlexEG/${projectName}?color=%23309930&style=plastic"
      alt="GitHub commit activity"
    />
    <img
      src="https://img.shields.io/github/languages/count/AlexEG/${projectName}?style=plastic"
      alt="GitHub language count"
    />
    <img
      src="https://img.shields.io/github/languages/top/AlexEG/${projectName}?color=%239900ff&style=plastic"
      alt="top language"
    />
    <img
      src="https://img.shields.io/github/license/AlexEG/${projectName}?color=%2300dd&style=plastic"
      alt="GitHub Project license"
    />
    <img
      src="https://img.shields.io/github/directory-file-count/AlexEG/${projectName}?&style=plastic"
      alt="GitHub contributors"
    />
    <img
      src="https://img.shields.io/github/repo-size/AlexEG/${projectName}?color=%23ff0055&style=plastic"
      alt="GitHub repo size"
    />
    <img
      src="https://img.shields.io/github/languages/code-size/AlexEG/${projectName}?color=5500bb&style=plastic"
      alt="GitHub code size in bytes"
    />
  </div>
  <div class="project__inner-container">
    <div class="project__inner-container__yt-review">
      <iframe
        src="https://www.youtube.com/embed/${YT_id}"
        projectName=""
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="project__inner-container__project-info">
      <div class="date">
        <p>Created at : <span></span></p>
        <p>Last Update : <span></span></p>
        <p>License : <span></span></p>
        <p>Project Status : <span>${Status}</span></p>
      </div>
      <div class="languages">
      ${languagesHTML}
      </div>
    </div>
    <div class="project__inner-container__description">
      <h3>Description</h3>
      <article>

      </article>
    </div>
    <div class="project__inner-container__github">
      <a href="https://github.com/AlexEG/${projectName}">source code</a>
      <a href="https://alexeg.github.io/${projectName}">Live review</a>
      <a href="./Code_Analytics/${projectName}">Code Analytics</a>
      <a href="./History/${projectName}">project-history</a>
    </div>
  </div>
</section>
  `;
}

// mainContaner.innerHTML += project(
//   `projectName`,
//   `wakatime`,
//   `shields`,
//   `YT_id`,
//   `YT_projectName`,
//   `Start`,
//   `Status`,
//   `languages`,
//   `description`,
//   `code`,
//   `live`,
//   `history`
// );
