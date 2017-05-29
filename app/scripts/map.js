'use strict';

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        successHandler,
        function() {},
        {}
    );
}

function successHandler(data) {
    var coords = data.coords;

    var API_KEY = 'AIzaSyCcFLPyqXMn3LMeBhDYFS1MbHnYBtnrCNQ';
    var iframe = document.createElement('iframe');

    iframe.src = 'https://www.google.com/maps/embed/v1/place?key=' + 
            API_KEY + '&q=' +
            coords.latitude + ',' + 
            coords.longitude;
    iframe.classList.add('geo');

    document.getElementById('mapa').appendChild(iframe);
}