let buttons = document.querySelectorAll("button"); // fixed
let inp = document.querySelector("input"); // fixed

console.log(buttons, 'hehehe');

for (let btn of buttons) {
  btn.addEventListener('click', () => {
    let text = btn.innerText;

    if (text === "C") {
      inp.value = "";
    } else if (text === "=") {
      try {
        inp.value = eval(inp.value); 
      } catch {
        inp.value = "Error";
      }
    }
    else if (text === "^") {
      inp.value += "**"; 
    }  else {
      inp.value += text;
    }
  });
}
