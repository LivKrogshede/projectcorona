// Tilføj ''fokus'', når input får fokus, og fjern det, når input mister fokus:
const inputs = document.querySelectorAll(".input");

// Valger fokus listen til parent(input-container):
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
// Det samme gøres her for blur og fjern fokus:
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});