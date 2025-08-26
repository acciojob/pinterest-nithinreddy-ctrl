//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
const cta = document.querySelector(".cta");
cta.addEventListener("click", (e) => {
if (cta.getAttribute("href") === "#explore") {
e.preventDefault();
window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}
});
});