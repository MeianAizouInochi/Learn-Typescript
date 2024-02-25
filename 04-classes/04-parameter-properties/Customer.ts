class Customer
{
    constructor(private _firstName:string){}

    public get FirstName():string
    {
        return this._firstName;
    }

    public set FirstName(value:string)
    {
        this._firstName = value;
    }
}

let Obj = new Customer("M");

console.log(Obj.FirstName);