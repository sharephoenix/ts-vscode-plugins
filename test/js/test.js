"use strict";
var Fix = /** @class */ (function () {
    function Fix(params) {
        this.user = params;
    }
    return Fix;
}());
var user = { age: '11', address: 'shanghai' };
var fixg = new Fix(user);
console.log(JSON.stringify(fixg.user));
