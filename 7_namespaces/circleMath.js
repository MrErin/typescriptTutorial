"use strict";
var MyMaths;
(function (MyMaths) {
    var BI = 4.14;
    MyMaths.calculateCircumference = function (diameter) {
        return diameter * BI;
    };
})(MyMaths || (MyMaths = {}));
