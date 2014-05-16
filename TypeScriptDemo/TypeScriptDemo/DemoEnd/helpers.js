﻿/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../scripts/typings/jquery.color/jquery.color.d.ts" />

var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
})();

var e = {
    name: 'Dan',
    price: 50.0,
    getName: function () {
        return this.name;
    }
};

function sortByName(a) {
    var result = a.slice(0);

    result.sort(function (x, y) {
        return x.getName().localeCompare(y.name);
    });
    return result;
}

var products = [
    new Product("Bananas", 3.50),
    new Product("Cabbage", 0.99),
    new Product("Peaches", 2.00),
    new Product("Artichoke", 2.00),
    new Product("Gala Apples", 3.50),
    new Product("Granny Smith Apples", 3.50)
];

var sorted = sortByName(products);

//alert(sorted[0].getName());
function animate() {
    var block = $('#content');
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    block.animate({ backgroundColor: $.Color(block.css('backgroundColor')).rgba([r, g, b, 1.0]) }, 500, animate);
}

$("#content").html(sorted[0].getName());
$("#content").fadeOut(500).delay(500).fadeIn(750).fadeOut(1000).fadeIn(1000).animate({ top: '-=400' });
animate();
//# sourceMappingURL=helpers.js.map
