
const newsContainer = document.getElementById("newsContainer");

function loadNews() {
  const news = JSON.parse(localStorage.getItem("news")) || [];
  if (newsContainer) {
    newsContainer.innerHTML = "";
    news.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "news-card";
      div.innerHTML = \`
        <h2>\${item.title}</h2>
        <p>\${item.content}</p>
      \`;
      newsContainer.appendChild(div);
    });
  }
}

function changeLanguage() {
  const lang = document.getElementById("languageSelect").value;
  alert("Language switched to: " + lang);
}

window.onload = loadNews;
