(function(){
  browser.storage.local.get("newtabpage").then(settings => {
    try {
      let targetPage = settings.newtabpage || 'about:home';
      document.title = `Redirecting to ${targetPage}`;
      document.location = targetPage;
    } catch(e) {
      document.getElementById('error_detail').innerText = e;
    }    
  }, error => {
    document.getElementById('error_detail').innerText = error;
  });
})();
