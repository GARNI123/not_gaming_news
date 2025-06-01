
document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.getElementById("news-container");
    const news = [
        { title: "New Game Release!", content: "A new RPG game just launched.", image: "" },
        { title: "Console Update", content: "Next-gen console gets a major update.", image: "" },
        { title: "Esports Tournament", content: "Championship set to begin next week.", image: "" }
    ];

    news.forEach(item => {
        const card = document.createElement("div");
        card.className = "news-card";
        card.innerHTML = \`
            <h3>\${item.title}</h3>
            <p>\${item.content}</p>
        \`;
        newsContainer.appendChild(card);
    });
});
