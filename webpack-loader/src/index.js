import { sum } from "./utils/math";
import bg from "./assets/background.jpeg";
import "./styles/index.css";

const a = document.getElementById("a");
const b = document.getElementById("b");

const result = document.getElementById("result");

const button = document.getElementById("btn");

button.onclick = () => {
    result.innerHTML = "= " + sum(Number(a.value), Number(b.value));
};

document.body.style.backgroundImage = `url(${bg})`;
