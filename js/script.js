
"use strict";

// Get HTML elements
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

// Button click event
if (messageButton && message) {

  messageButton.addEventListener("click", function () {

    if (message.hidden) {

      // Show message
      message.textContent = "My website is ready for deployment!";
      message.hidden = false;

      messageButton.textContent = "Hide Message";
      messageButton.setAttribute("aria-expanded", "true");

    } else {

      // Hide message
      message.hidden = true;

      messageButton.textContent = "Show Message";
      messageButton.setAttribute("aria-expanded", "false");

    }

  });

}
