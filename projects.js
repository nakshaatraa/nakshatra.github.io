const projects = [
  {
    title: "Movie Data Analysis",
    description: "Performed exploratory data analysis (EDA) on a movie dataset to identify trends in ratings, genres, popularity, and release patterns. Used data cleaning, visualization, and statistical insights to answer real-world questions.",
    tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
    github: "https://github.com/nakshaatraa/movie-data-analysis-python"
  },
  {
    title: "Language Detection using Machine Learning (NLP)",
    description: "Built a machine learning model to automatically detect the language of a given text. Implemented text preprocessing, feature extraction, and supervised learning techniques using NLP concepts.",
    tech: "Python, Scikit-learn, NLP, Machine Learning",
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
