(function(){
  browser.storage.local.get("newtabpage").then(settings => {
    document.location = settings.newtabpage || 'about:home';
  }, error => {
    console.log(`Error: ${error}`);
  });
})();
