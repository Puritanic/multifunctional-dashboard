document.addEventListener("mouseup", dataFromSelection);

function dataFromSelection() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection) {
    return document.selection.createRange().text;
  } else {
    return '';
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method == "sendingRequest") {

    sendResponse({
      data: dataFromSelection
    });
    console.log(dataFromSelection);
    return true;
  } else {
    console.log("No request!");
    sendResponse({});
  }
});