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

        card.style.display = name.includes(search) ? "" : "none";

    });

});


// TOOL HANDLER
function openTool(tool) {

    if (tool === "word-counter") {
        openWordCounter();
        return;
    }

    alert(
        tool.replace("-", " ").toUpperCase() +
        " will be available soon!"
    );
}


// WORD COUNTER
function openWordCounter() {

    const toolWindow = document.createElement("div");

    toolWindow.className = "tool-window";

    toolWindow.innerHTML = `
        <div class="tool-window-content">

            <button class="close-tool" onclick="closeTool()">
                ×
            </button>

            <p class="eyebrow">NOVATOOLS</p>

            <h2>Word Counter</h2>

            <p class="tool-description">
                Count words and characters instantly.
            </p>

            <textarea
                id="wordInput"
                placeholder="Start typing or paste your text here..."
            ></textarea>

            <div class="counter-results">

                <div class="counter-box">
                    <span id="wordCount">0</span>
                    <small>Words</small>
                </div>

                <div class="counter-box">
                    <span id="characterCount">0</span>
                    <small>Characters</small>
                </div>

                <div class="counter-box">
                    <span id="characterNoSpace">0</span>
                    <small>Without spaces</small>
                </div>

            </div>

        </div>
    `;

    document.body.appendChild(toolWindow);

    const input = document.getElementById("wordInput");

    input.addEventListener("input", function () {

        const text = input.value;

        const words = text.trim()
            ? text.trim().split(/\s+/).length
            : 0;

        document.getElementById("wordCount").textContent = words;

        document.getElementById("characterCount").textContent =
            text.length;

        document.getElementById("characterNoSpace").textContent =
            text.replace(/\s/g, "").length;

    });

}


// CLOSE TOOL
function closeTool() {

    const toolWindow =
        document.querySelector(".tool-window");

    if (toolWindow) {
        toolWindow.remove();
    }

}
