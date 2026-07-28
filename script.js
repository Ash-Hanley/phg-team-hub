// Update only this information each month.
const newsletterData = {
  latest: {
    month: "August 2026",
    title: "August 2026 Newsletter",
    description: "Read the latest news, team recognition and updates from across Pinnacle Hospitality Group.",
    link: "newsletters/latest.pdf"
  },
  previous: [
    { month: "July 2026", title: "July 2026 Newsletter", link: "newsletters/july-2026.pdf" },
    { month: "June 2026", title: "June 2026 Newsletter", link: "newsletters/june-2026.pdf" },
    { month: "May 2026", title: "May 2026 Newsletter", link: "newsletters/may-2026.pdf" }
  ]
};

document.getElementById("latest-heading").textContent = newsletterData.latest.month;
document.getElementById("cover-month").textContent = newsletterData.latest.month.toUpperCase();
document.getElementById("latest-title").textContent = newsletterData.latest.title;
document.getElementById("latest-description").textContent = newsletterData.latest.description;
document.getElementById("latest-link").href = newsletterData.latest.link;

const list = document.getElementById("archive-list");
newsletterData.previous.forEach(item => {
  const link = document.createElement("a");
  link.className = "archive-item";
  link.href = item.link;
  link.target = "_blank";
  link.rel = "noopener";
  link.innerHTML = `<span class="month">${item.month.toUpperCase()}</span><h3>${item.title}</h3><span class="arrow">→</span>`;
  list.appendChild(link);
});
