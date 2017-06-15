var pageUrlBox = document.querySelector("#newtabpage");
function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    newtabpage: pageUrlBox.value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    pageUrlBox.value = result.newtabpage || "about:home";
  }

  browser.storage.local.get("newtabpage").then(setCurrentChoice, error => {
    console.log(error);
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
