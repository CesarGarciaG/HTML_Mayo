'use strict';

(function() {

    window.service.product.getProducts({}).then(function(res) {
        console.log(res);
    });

})();