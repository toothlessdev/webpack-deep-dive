import { sum } from "./math";
import "./index.css";

const a = document.getElementById("a");
const b = document.getElementById("b");

const result = document.getElementById("result");

const button = document.getElementById("btn");

button.onclick = () => {
    result.innerHTML = "= " + sum(Number(a.value), Number(b.value));
};
