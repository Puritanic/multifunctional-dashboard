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

      chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.method == "wysylamZapytanie")
          sendResponse({data: window.getSelection().toString()});
        else
          sendResponse({}); // snub them.
      });