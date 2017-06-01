'use strict';

(function() {

    var json = null;
    $.ajax({
        url: '../resources/mocks/list.json',
        dataType: 'json',
        success: function(data) {
            json = data;
        }
    });
    console.log(json);
    
})();