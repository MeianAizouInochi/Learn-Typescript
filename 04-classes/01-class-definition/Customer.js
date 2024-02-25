var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("m", "n");
// myCustomer.firstName = "M";
// myCustomer.lastName = "N";
console.log("".concat(myCustomer.firstName, " and ").concat(myCustomer.lastName));
