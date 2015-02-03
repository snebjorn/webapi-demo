/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
var ary = [1, 2, 3];
var myClass = (function () {
    function myClass() {
        this.propA = "asdf";
        this.propB = "foo";
    }
    myClass.prototype.greet = function (message) {
        var j = $('html');
        console.log(j.height());
        return;
    };
    return myClass;
})();
//# sourceMappingURL=test.js.map