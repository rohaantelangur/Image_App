import { getinput, sort, show, show2 } from "../components/function.js"
import "../styles/style.css";
// document.getElementById("Navbar").innerHTML=Navbar()
// console.log(Navbar())

let x = document.querySelector("#Navbar2").children;

for (let el of x) {
  el.addEventListener("click", show);
}

let y = document.querySelector("#filter").children;

for (let el of y) {
  el.addEventListener("click", show2);
}

document.getElementById("sort-select").addEventListener("change", sort);
document.getElementById("SearchImage").addEventListener("input", getinput);
