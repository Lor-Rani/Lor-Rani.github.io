function showButton() {
    var prompts = document.getElementById("prompts");
    var answers = document.getElementById("q1");
    if (prompts.style.display === "none") {
        prompts.style.display = "block";
    }
    if (answers.style.display === "none") {
        answers.style.display = "block";
    }
}