// Write JavaScript here.
console.log('main.js loaded successfully!')

for (let li of document.querySelectorAll("#colors")) {
  li.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "grey";
    event.target.style.color = "blue";
  });
}