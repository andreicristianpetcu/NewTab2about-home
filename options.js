function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    newtabpage: document.querySelector("#newtabpage").value,
    focussearch: document.querySelector("#focussearch").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#newtabpage").value = result.newtabpage || "about:home";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("newtabpage");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
