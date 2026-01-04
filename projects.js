const projects = [
  {
    title: "Movie Data Analysis",
    description: "Exploratory data analysis of movie datasets using Python to uncover trends (ratings, genres, popularity).",
    tech: "Python, Pandas, Matplotlib",
    github: "https://github.com/nakshaatraa/movie-data-analysis-python"
  },
  {
    title: "Language Detector (ML + NLP)",
    description: "Machine learning based language detection using text data and NLP techniques.",
    tech: "Python, Scikit-learn, NLP",
    github: "https://github.com/nakshaatraa/language-detector-ml-nlp-python"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech:</strong> ${project.tech}</p>
    <a href="${project.github}" target="_blank">View on GitHub →</a>
  `;
  container.appendChild(card);
});
