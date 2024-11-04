window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => {
        pane.classList.remove("active");
        pane.style.animation = "none";
      });

      this.classList.add("active");
      if (targetTab === "all") {
        tabPanes.forEach((pane) => {
          pane.classList.add("active");
          pane.style.animation = "fadeIn 0.5s ease-out";
        });
      } else {
        document.getElementById(targetTab).classList.add("active");
        document.getElementById(targetTab).style.animation =
          "fadeIn 0.5s ease-out";
      }
    });
  });
});

/*
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
  */

const projects = [
  {
    title: "Scribe-Support App",
    description:
      "An advanced Android application to assist visually impaired and physically challenged individuals by connecting them with volunteers for exam writing support.",
    techStack:
      "Android Studio, Java, XML, ChatGPT API, Firebase, Google Speech-To-Text API",
    liveLink: "https://github.com/DiwakarAllu/scribe-support",
    image: "/Devtown_portfolio/images/circular_img.png",
  },
  {
    title: "Plant-Vitality App",
    description:
      "An Android application to predict plant diseases from user-submitted images and provide fertilizer recommendations.",
    techStack: "Android Studio, Java, Python, Brain Shop API, SQL database",
    liveLink: "https://github.com/DiwakarAllu/Plant-Vitality",
    image:
      "https://e7.pngegg.com/pngimages/465/578/png-clipart-green-plant-on-soil-tree-planting-paper-organization-growth-park-company-leaf.png", // Path to your image
  },
  {
    title: "Customer Churn Prediction Model",
    description:
      "Developed a predictive model for identifying customer churn in the telecom industry, achieving 93.5% accuracy.",
    techStack: "Python, Flask, Plotly, Machine Learnig Models",
    liveLink: "https://github.com/DiwakarAllu/Telecom-Churn-Prediction",
    image:
      "https://www.providesupport.com/blog/wp-content/uploads/2018/08/Reason-to-Leave...blog_.png", // Path to your image
  },
  {
    title: "Turn-Based Chess-Like Game",
    description:
      "A turn-based chess-like game implemented using Flask and Socket.IO for real-time communication on a 5x5 grid.",
    techStack: "Flask, Socket.IO, JavaScript, HTML, CSS",
    liveLink: "https://diwakarallu.github.io/mini-chess/",
    image:
      "https://github.com/DiwakarAllu/DiwakarAllu-21BCE9213/raw/main/static/Images/win2.png",
  },
  {
    title: "Global CO2 Emissions Analysis",
    description:
      "Analyzed global CO2 emissions using a Kaggle dataset, focusing on emissions by country and source (coal, oil, gas, cement, flaring, other).",
    techStack: "MySQL, Tableau, Flask, Agile methodologies,Bootstrap",
    liveLink:
      "https://diwakarallu.github.io/Unearthing-The-Environmental-Impact-Of-Human-Activity-A-Global-CO2-Emission-Analysis/",
    image:
      "https://e7.pngegg.com/pngimages/216/830/png-clipart-carbon-footprint-carbon-dioxide-carbon-capture-and-storage-enhanced-oil-recovery-pollution-miscellaneous-globe.png", // Path to your image
  },
  {
    title: "Turtle Crossing Game",
    description:
      "Navigate your turtle through a bustling street in this exciting Python-based game. Avoid vehicles, level up, and see how far you can get!",
    techStack: "Python, Turtle Graphics",
    liveLink:
      "https://github.com/DiwakarAllu/turtle-crossing?tab=readme-ov-file",
    image:
      "https://camo.githubusercontent.com/80dcf0fa702580aceb8db4ff9fea7395023bef3f87100b5e594917218dabda01/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f55544f4c466d765877374566707139334b412f67697068792e676966", // Path to your image
  },
  {
    title: "The Eloquent Reader",
    description:
      "An innovative tool that converts PDF documents into spoken words, enhancing accessibility for users who prefer auditory formats.",
    techStack: "Python,tkinter, pyttsx3",
    liveLink:
      "https://github.com/DiwakarAllu/The-Eloquent-Reader?tab=readme-ov-file",
    image:
      "https://e7.pngegg.com/pngimages/504/800/png-clipart-audiobook-far-from-the-madding-crowd-macos-audio-book-app-store-macos-thumbnail.png", // Path to your image
  },
  {
    title: "BeatFlow",
    description:
      "A web-based musical drum application created with JavaScript, allowing users to generate drum beats and rhythms by interacting with virtual drum pads.",
    techStack: "JavaScript, HTML, CSS",
    liveLink: "https://diwakarallu.github.io/Beatflow/",
    image:
      "https://e7.pngegg.com/pngimages/267/360/png-clipart-musical-instrument-illustration-this-business-of-music-music-education-music-industry-free-music-watercolor-music-element-watercolor-painting-watercolor-leaves.png", // Path to your image
  },
  {
    title: "MyMemoir - Personal Journal App",
    description:
      "MyMemoir is a personal journal app that allows users to write and organize their thoughts, memories, and experiences in a private and secure digital diary.",
    techStack: "Android Studio, Java, SQLite",
    liveLink: "https://github.com/DiwakarAllu/MyMemoir",
    image:
      "https://e7.pngegg.com/pngimages/76/181/png-clipart-fountain-pen-inkwell-quill-pen-feather-book-ink-furniture.png", // Path to your image
  },
];

function displayProjects() {
  const projectContainer = document.getElementById("projectContainer");
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-card");

    projectDiv.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <h6>${project.techStack}</h6>
      <a href="${project.liveLink}" target="_blank" class="project-button">View Project</a>
    `;

    projectContainer.appendChild(projectDiv);
  });
}

displayProjects();
