const password_1 = document.querySelector("#password_1");
const password_2 = document.querySelector("#password_2");

const password_block = document.querySelector("#password");

password_1.addEventListener("input", checkValidity);
password_2.addEventListener("input", checkValidity);

function checkValidity() {
    if (password_1.value !== password_2.value) {
        password_block.className = "nomatch";
        password_1.setCustomValidity("Passwords do not match");
        password_2.setCustomValidity("Passwords do not match");
    } else {
        password_block.className = "";
        password_1.setCustomValidity("");
        password_2.setCustomValidity("");
    }
}