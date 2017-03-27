(function(){
  var getting = browser.storage.local.get("newtabpage");
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  getting.then(function(settings){
    document.location = settings.newtabpage || 'about:home';
  }, onError);
})();
