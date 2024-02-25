class Customer
{
    firstName:string;
    lastName:string;

    constructor(theFirst:string, theLast:string)
    {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("m","n");

// myCustomer.firstName = "M";
// myCustomer.lastName = "N";

console.log(`${myCustomer.firstName} and ${myCustomer.lastName}`)