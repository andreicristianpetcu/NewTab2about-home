var pageUrlBox = document.querySelector("#newtabpage");
function showMessageOnButton(message){
  document.querySelector("#save_button").innerText = message;
}
function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    newtabpage: pageUrlBox.value
  }).then(() => {
      showMessageOnButton('Seved!');
      setTimeout(function(){ showMessageOnButton('Save'); }, 3000);
    }, error => {
      showMessageOnButton('Error!');
      setTimeout(function(){ showMessageOnButton('Save'); }, 3000);
      console.log(error);
    }
  );
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
