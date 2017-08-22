chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('index.html'),
        'selected': true
    });
});
    // Open browser popup with key combination Ctrl + Shift + K for Linux
   chrome.commands.onCommand.addListener(function(command) {
        console.log('Command:', command);
      });

      $(function(){
        $('#quoteGrabber').click(function(){pasteSelection();});
      });
      function pasteSelection() {
        chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
        function(tab) {
          chrome.tabs.sendMessage(tab[0].id, {method: "wysylamZapytanie"}, 
          function(response){
            console.log('dostaje odpowiedz');
            console.log(response);
            var text = document.getElementById('text'); 
            text.innerHTML = response.data;
          });
        });
      }