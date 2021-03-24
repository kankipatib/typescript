var class_one = /** @class */ (function () {
    function class_one(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_one;
}());
var obj1 = new class_one("angular", "node", "react");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);
