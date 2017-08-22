$(function(){
  $('#quoteGrabber').click(function(){pasteSelection();});
});
function pasteSelection() {
  quoteGrabberDiv();
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

var x = document.getElementById('colorPicker');
var y = document.getElementById('colorPalette');
var z = document.getElementById('URL-shortener');
var v = document.getElementById('quoteGrabber');
function colorPickerDiv() {
      
        x.style.visibility = 'visible';
        y.style.visibility = 'hidden';
        z.style.visibility = 'hidden';
        v.style.visibility = 'hidden';
    
}
function colorPaletteDiv() {
    
        x.style.visibility = 'hidden';
        y.style.visibility = 'visible';
        z.style.visibility = 'hidden';
        v.style.visibility = 'hidden';
    
}
function urlShortenerDiv() {
        
        x.style.visibility = 'hidden';
        y.style.visibility = 'hidden';
        z.style.visibility = 'visible';
        v.style.visibility = 'hidden';
    
}
function quoteGrabberDiv() {
        
        x.style.visibility = 'hidden';
        y.style.visibility = 'hidden';
        z.style.visibility = 'hidden';
        v.style.visibility = 'visible';
    
}

quoteGrabberDiv();