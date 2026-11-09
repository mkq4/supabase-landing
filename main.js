const signInModal = document.querySelector("#sign-in-modal");
const signInForm = document.querySelector("#sign-in-form");

// Открываем окно и сразу ставим курсор в поле почты.
document.querySelector("#open-sign-in").addEventListener("click", function () {
    signInModal.classList.add("is-open");
    signInModal.setAttribute("aria-hidden", "false");
    document.querySelector("#email").focus();
});

function closeSignInModal() {
    signInModal.classList.remove("is-open");
    signInModal.setAttribute("aria-hidden", "true");
    signInForm.reset();
}

document.querySelector("#close-sign-in").addEventListener("click", closeSignInModal);

signInModal.addEventListener("click", function (event) {
    if (event.target === signInModal) {
        closeSignInModal();
    }
});

signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    closeSignInModal();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && signInModal.classList.contains("is-open")) {
        closeSignInModal();
    }
});

// Находим код внутри того блока, где нажали Copy.
document.querySelectorAll(".copy").forEach(function (button) {
    button.addEventListener("click", function () {
        const codeBlock = button.closest(".code");
        const codeLines = codeBlock.querySelectorAll(".code-row .line");
        const codeText = Array.from(codeLines).map(function (line) {
            return line.innerText;
        }).join("\n");

        navigator.clipboard.writeText(codeText).then(function () {
            button.querySelector("span").textContent = "Copied!";
            setTimeout(function () {
                button.querySelector("span").textContent = "Copy";
            }, 1500);
        }).catch(function () {
            alert("Не удалось скопировать код.");
        });
    });
});
