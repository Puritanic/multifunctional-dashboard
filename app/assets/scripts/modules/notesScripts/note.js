import $ from '../../vendor/jquery-3.2.1.min';

$(document).mouseup(function() {
    var text=getSelectedText();
    if (text!="") console.log(text); 
});

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if(document.selection) {
        return document.selection.createRange().text;
    } else {
        return '';
    }
}