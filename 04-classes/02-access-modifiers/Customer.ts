class Customer
{
    private _firstName:string;
    private _lastName:string;

    public get FirstName():string 
    {
        return this._firstName;
    }

    public set FirstName(value:string)
    {
        this._firstName = value;
    }

    public get LastName():string
    {
        return this._lastName;
    }

    public set LastName(value:string)
    {
        this._lastName = value;
    }
}


let Obj = new Customer();

Obj.FirstName = "M";

Obj.LastName = "N";

console.log(`${Obj.FirstName} and ${Obj.LastName}`);