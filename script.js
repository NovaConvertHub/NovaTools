// ===============================
// NOVATOOLS - MAIN JAVASCRIPT
// ===============================


// TOOL SEARCH
const searchInput = document.getElementById("searchInput");
const toolCards = document.querySelectorAll(".tool-card");

searchInput.addEventListener("input", function () {

    const search = this.value.toLowerCase().trim();

    toolCards.forEach(function (card) {

        const name = card.dataset.name.toLowerCase();

        if (name.includes(search)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


// TOOL BUTTON
function openTool(tool) {

    alert(
        tool.replace("-", " ").toUpperCase() +
        " will be available soon!"
    );

}
