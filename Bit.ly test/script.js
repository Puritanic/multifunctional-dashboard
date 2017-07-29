
    var login = LOGIN;
    var api_key = API;
    var long_url;
    var tablink;

    // https://stackoverflow.com/questions/4760538/using-only-javascript-to-shrink-urls-using-the-bit-ly-api
    function get_short_url(long_url, login, api_key, func)
    {
        $.getJSON(
            "http://api.bitly.com/v3/shorten?", 
             { 
                 "format": "json",
                 "apiKey": api_key,
                 "login": login,
                 "longUrl": long_url
             },
             function(response)
             {
                 func(response.data.url);
             }
         );
     }
     // getting the URL of the current tab 
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        tablink = tabs[0].url;
    });

     $('#submit').on('click', function () { 
        // long_url = $('#longurl').val();
        // console.log($('#longurl').val());

        $('#short').text("");
        long_url = tablink;
        console.log(tablink);

        get_short_url(long_url, login, api_key, function(short_url) {
        console.log(short_url);
        $('#short').append( '<a href="' + short_url + '" target="_blank">' + short_url + '</a>');
    });
});