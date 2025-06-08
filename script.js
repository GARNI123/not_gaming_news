
function addNews() {
  const title = document.getElementById('newsTitle').value;
  const content = document.getElementById('newsContent').value;
  if (title && content) {
    const newsItem = { title, content };
    let newsList = JSON.parse(localStorage.getItem("newsList")) || [];
    newsList.push(newsItem);
    localStorage.setItem("newsList", JSON.stringify(newsList));
    renderNews();
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';
  }
}

function renderNews() {
  const container = document.getElementById('news-container');
  container.innerHTML = '';
  const newsList = JSON.parse(localStorage.getItem("newsList")) || [];
  newsList.forEach(news => {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
    container.appendChild(card);
  });
}

function openAdmin() {
  const panel = document.getElementById('admin-panel');
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

function changeLanguage(lang) {
  alert("Language changed to: " + lang + " (This is a demo — translations not implemented yet.)");
}

renderNews();
