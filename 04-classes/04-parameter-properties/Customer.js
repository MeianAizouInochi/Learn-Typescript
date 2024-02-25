var Customer = /** @class */ (function () {
    function Customer(_firstName) {
        this._firstName = _firstName;
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
    return Customer;
}());
var Obj = new Customer("M");
console.log(Obj.FirstName);
