chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "wysylamZapytanie")
    sendResponse({data: window.getSelection().toString()});
  else
    sendResponse({}); // snub them.
});