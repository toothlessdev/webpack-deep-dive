const math = require("./math");

const a = document.getElementById("a");
const b = document.getElementById("b");

const result = document.getElementById("result");

const button = document.getElementById("btn");

button.onclick = () => {
    result.innerHTML = "= " + math.sum(Number(a.value), Number(b.value));
};
