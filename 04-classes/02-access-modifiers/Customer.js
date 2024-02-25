var Customer = /** @class */ (function () {
    function Customer() {
    }
    Object.defineProperty(Customer.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "LastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var Obj = new Customer();
Obj.FirstName = "M";
Obj.LastName = "N";
console.log("".concat(Obj.FirstName, " and ").concat(Obj.LastName));
