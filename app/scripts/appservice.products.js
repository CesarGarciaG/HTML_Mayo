'use strict';

(function() {

    var service = {
        root: '../resources/mocks/',
        getProduct: getProduct,
        getProducts: getProducts
    };

    function getProduct() {
        return $.ajax({
            url: service.root + 'item.json',
            dataType: 'json'
        });
    }

    function getProducts() {
        return $.ajax({
            url: service.root + 'list.json',
            dataType: 'json'
        });
    }

    window.service = window.service || {};
    window.service.product = service;
    
})();