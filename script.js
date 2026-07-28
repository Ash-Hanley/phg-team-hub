// EDIT ONLY THIS SECTION EACH MONTH
const siteData = {
  latest: {
    month: "August 2026",
    title: "August 2026 Edition",
    description: "Celebrate this month’s Pinnacle MVP, team milestones, new starters, guest highlights and updates from across PHG.",
    pdfUrl: "#" // Paste the public PDF link between the quotation marks
  },
  archive: [
    { month: "July 2026", title: "July Edition", pdfUrl: "#" },
    { month: "June 2026", title: "June Edition", pdfUrl: "#" },
    { month: "May 2026", title: "May Edition", pdfUrl: "#" }
  ]
};
// END OF MONTHLY EDITING SECTION

document.getElementById("coverMonth").textContent = siteData.latest.month.toUpperCase();
document.getElementById("latestTitle").textContent = siteData.latest.title;
document.getElementById("latestDescription").textContent = siteData.latest.description;
document.getElementById("latestPdfButton").href = siteData.latest.pdfUrl;

const archiveGrid = document.getElementById("archiveGrid");
siteData.archive.forEach((edition) => {
  const card = document.createElement("a");
  card.className = "archive-card";
  card.href = edition.pdfUrl;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `<span class="month">${edition.month.toUpperCase()}</span><h3>${edition.title}</h3><p>Read this edition of Pinnacle Pulse.</p><b>Open newsletter →</b>`;
  archiveGrid.appendChild(card);
});

document.querySelectorAll(".placeholder-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add this link when the resource is ready.");
  });
});
