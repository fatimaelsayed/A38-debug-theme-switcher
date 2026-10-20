const button = document.getElementById("toggle") //invalid ID, "toggl"-->"toggle"
const body= document.querySelector("body") //used getElemntById instead

button.addEventListener("click",toggleTheme);

function toggleTheme() { //missing ()
    console.log("button was clicked")
    body.classList.toggle("dark");
}