const searchInput = document.getElementById("paperSearch");
const paperCards = document.querySelectorAll(".paper-card");

searchInput.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    paperCards.forEach(function (card) {
        const paperText = card.textContent.toLowerCase();

        if (paperText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});
function downloadPaper(filePath) {
    const link = document.createElement("a");

    link.href = filePath;
    link.download = "";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}