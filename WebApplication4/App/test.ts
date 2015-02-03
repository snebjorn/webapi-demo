/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />

var ary: Array<number> = [1, 2, 3];

interface myInterface {
    propA;
    propB;
    greet(message: string): void;
}

class myClass implements myInterface {
    propA = "asdf";
    propB = "foo";
    
    greet(message) {
        var j: JQuery = $('html');
        
        console.log(j.height());
        return;
    }
}