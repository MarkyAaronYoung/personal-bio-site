const projects = [
  {
    title: "Cool Project", 
    screenshot: "https://via.placeholder.com/350x150", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Other Cool Project", 
    screenshot: "https://via.placeholder.com/350x150", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "New Cool Project", 
    screenshot: "https://via.placeholder.com/350x150", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
]

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const createProjectCards = (projectsArray) => {
    let domString = '';

    for (let i = 0; i < projectsArray.length; i++) {
    if(projectsArray[i].available === true) {
      domString += '<div class="projects">'
      domString += `<h2>${projectsArray[i].title}</h2>`
      domString += `<img src="${projectsArray[i].screenshot}" alt=""/>`
      domString += `<h3>${projectsArray[i].description}</h3>`
      domString += `<p>${projectsArray[i].technologiesUsed}</p>`
      domString += `<h4><a href="${projectsArray[i].url}">ProjectLink</a></h4>`
      domString += `<h5><a href="${projectsArray[i].githubUrl}"></a></h5>`
      domString += '</div>'
    }
  }
  printToDom('#projectsPage', domString)
};

const init = () => {
  createProjectCards(projects)
};

init();
