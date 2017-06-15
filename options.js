function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    newtabpage: document.querySelector("#newtabpage").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#newtabpage").value = result.newtabpage || "about:home";
  }

  var getting = browser.storage.local.get("newtabpage");
  getting.then(setCurrentChoice, error => {
    console.log(`Error: ${error}`);
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
