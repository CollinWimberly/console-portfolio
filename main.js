const input = document.getElementById("commandInput");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    const userLine = document.createElement("div");
    userLine.textContent = "> " + cmd;
    document.getElementById("output").appendChild(userLine);
    
    handleCommand(cmd);
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});