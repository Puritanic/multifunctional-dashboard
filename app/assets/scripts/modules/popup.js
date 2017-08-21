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