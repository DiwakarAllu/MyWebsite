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


let projects = [];
async function fetchProjects() {
  const container = document.getElementById("projectContainer");

  try {
    const response = await fetch("https://api.npoint.io/a3e44c313c31388216dd/");
    if (!response.ok) throw new Error("Network response was not OK");

    const data = await response.json();
    if (data.length === 0) {
      container.innerHTML =
        "<p style='text-align:center; color: grey;'>No projects found.</p>";
      return;
    }
    console.log(data);
    projects = data;
    displayProjects();
  } catch (error) {
    console.error("Fetch error:", error);
    container.innerHTML = `
      <p style="color: red; text-align:center;">
        🚨 Failed to load projects. Please check your connection or try again later.
      </p>
    `;
  }
}
window.onload = () => {
  fetchProjects();
};


function displayProjects() {
  console.log("Projects data:", projects);

  const projectContainer = document.getElementById("projectContainer");
  projectContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
  `;

  projectContainer.innerHTML = ""; // Clear previous content

  projects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.style.cssText = `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.7);
      border-radius: 15px;
      box-shadow: 6px 6px 15px rgba(200, 200, 200, 0.3), -6px -6px 15px rgba(255, 255, 255, 0.2);
      padding: 20px;
      height: 300px; /* Fixed height */
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.4s ease, border-color 0.3s ease;
    `;

    setTimeout(() => {
      projectDiv.style.opacity = 1;
      projectDiv.style.transform = "translateY(0)";
    }, index * 200);

    projectDiv.addEventListener("mouseover", () => {
      projectDiv.style.boxShadow =
        "inset 4px 4px 10px rgba(222, 20, 253, 0.4), inset -4px -4px 10px rgba(247, 91, 247, 0.2)";
      projectDiv.style.border = "2px solid rgba(220, 132, 237, 0.7)";
    });

    projectDiv.addEventListener("mouseout", () => {
      projectDiv.style.boxShadow =
        "6px 6px 15px rgba(200, 200, 200, 0.3), -6px -6px 15px rgba(255, 255, 255, 0.2)";
      projectDiv.style.border = "1px solid rgba(255, 255, 255, 0.7)";
    });

    projectDiv.innerHTML = `
      <div style="flex: 1; text-align: center; background: rgba(255, 255, 255, 0.25); padding: 10px; border-radius: 15px; height: 100%; display: flex; justify-content: center; align-items: center;">
        <img src="${project.image || "https://placehold.co/600x400"}" alt="${
      project.title
    }" style="
          max-width: 100%;
          
           width: 100%;
           height: 250px;
          object-fit: cover;
          border-radius: 1.5rem;
          transition: transform 0.3s ease-in-out;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
        " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      </div>
      <div style="flex: 2; padding-left: 20px; background: rgba(255, 255, 255, 0.15); padding: 10px; border-radius: 15px; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
        <h2 style="color: #333; margin-bottom: 10px; font-weight: bold; font-size: 1.4rem; line-height: 1.2;">${
          project.title
        }</h2>
        <p style="font-size: 14px; color: #555; line-height: 1.6; margin-bottom: 10px;">${
          project.description
        }</p>
        <h6 style="color: #777; margin-top: 10px;">${project.techStack}</h6>
        <div style="display: flex; justify-content: center; gap: 1.5rem; margin-top: 20px;">
          <button style="
            font-weight: 500;
            transition: all 300ms ease;
            padding: 1rem;
            width: 8rem;
            border-radius: 30px;
            font-size: 1rem;
            background: linear-gradient(145deg, #d4d4d4, #f0f0f0);
            box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6), inset -2px -2px 5px rgba(200, 200, 200, 0.4);
            border: none;
            color: black;
          " onmouseover="this.style.boxShadow='inset -2px -2px 5px rgba(255, 255, 255, 0.8), inset 2px 2px 5px rgba(200, 200, 200, 0.6)'" onmouseout="this.style.boxShadow='inset 2px 2px 5px rgba(255, 255, 255, 0.6), inset -2px -2px 5px rgba(200, 200, 200, 0.4)'" onclick="location.href='${
            project.githubLink
          }'">
            Github
          </button>
          <button style="
            font-weight: 500;
            transition: all 300ms ease;
            padding: 1rem;
            width: 8rem;
            border-radius: 30px;
            font-size: 1rem;
            background: linear-gradient(145deg, #f3a5f6, #ff82d2);
            box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.6), inset -2px -2px 5px rgba(200, 200, 200, 0.4);
            border: none;
            color: white;
          " onmouseover="this.style.boxShadow='inset -2px -2px 5px rgba(255, 255, 255, 0.8), inset 2px 2px 5px rgba(200, 200, 200, 0.6)'" onmouseout="this.style.boxShadow='inset 2px 2px 5px rgba(255, 255, 255, 0.6), inset -2px -2px 5px rgba(200, 200, 200, 0.4)'" onclick="location.href='${
            project.liveLink
          }'">
            Live Demo
          </button>
        </div>
      </div>
    `;

    projectContainer.appendChild(projectDiv);
  });
}

displayProjects();
