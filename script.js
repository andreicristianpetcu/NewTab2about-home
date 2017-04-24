(function(){
  const newTabPagePromise = browser.storage.local.get("newtabpage");
  const focusSearchPromise = browser.storage.local.get("focussearch");
  function onError(error) {
    console.log(`Error: ${error}`);
  }

  newTabPagePromise.then(function(settings){
    document.location = settings.newtabpage || 'about:home';
  }, onError);
})();
