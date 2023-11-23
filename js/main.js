const result = document.querySelector(".display input");

result.focus();

function calc() {
  result.focus();
  if (result.value.length > 0) {
    result.value = eval(result.value);
  }
}

result.addEventListener("input", (e) => {
  if (e.key === "Enter") {
    calc();
  }
});
