"use strict";
var MyMaths;
(function (MyMaths) {
    var BI = 4.14;
    MyMaths.calculateRectangle = function (width, length) {
        return width * length;
    };
})(MyMaths || (MyMaths = {}));
