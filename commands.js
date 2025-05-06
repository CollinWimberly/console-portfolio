function handleCommand(cmd) {
    const output = document.createElement("div");
    const progressBar = document.querySelector(".progress-bar");
    const progressContainer = document.querySelector(".progress-container");
  
    // For 'help', 'clear', and unknown commands, we skip the progress bar
    if (cmd.toLowerCase() === "help" || cmd.toLowerCase() === "clear" || !isValidCommand(cmd)) {
      handleOutput(cmd, output);
      document.getElementById("output").appendChild(output);
      return;
    }
  
    // Show progress bar for valid commands (not 'help', 'clear', or unknown)
    progressContainer.style.display = "block";
    progressBar.style.width = "0%";
  
    let progress = 0;
    const randomTime = getRandomTime(1500, 3000); // Random time between 1.5s and 3s
    const progressInterval = setInterval(() => {
      progress += 2;
      progressBar.style.width = `${progress}%`;
  
      if (progress >= 100) {
        clearInterval(progressInterval);
        handleOutput(cmd, output);
        progressContainer.style.display = "none";
        document.getElementById("output").appendChild(output);
      }
    }, randomTime / 50); // Adjust the frequency of progress updates based on random time
  
  }
  
  // Function to get a random time for loading (in milliseconds)
  function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to check if the command is valid (not 'help', 'clear', or an unknown command)
  function isValidCommand(cmd) {
    const validCommands = ["about", "projects", "contact"];
    return validCommands.includes(cmd.toLowerCase());
  }
  
  // Function to handle the output based on the command
  function handleOutput(cmd, output) {
    switch (cmd.toLowerCase()) {
      case "help":
        output.textContent = "Available commands: about, projects, contact, clear, help";
        break;
      case "about":
        output.textContent = aboutText;
        break;
      case "projects":
        output.innerHTML = projects.map(p =>
          `<div class="output-line">
             <strong>${p.name}</strong><br>
             ${p.description}<br>
             <a href="${p.link}" target="_blank">${p.link}</a>
           </div>`
        ).join("");
        break;
      case 'contact':
        output.innerHTML = `
          <div class="output-line">Email: collinwimberly@outlook.com</div>
          <div class="output-line">GitHub: <a href="https://github.com/CollinWimberly" target="_blank">https://github.com/CollinWimberly</a></div>
          <div class="output-line">LinkedIn: <a href="https://www.linkedin.com/in/collin-wimberly-49018a364" target="_blank">linkedin.com/in/collin-wimberly-49018a364</a></div>
        `;
        break;
      case "clear":
        document.getElementById("output").innerHTML = "";
        return;
      default:
        output.textContent = `Command not recognized: ${cmd}`;
    }
  }  