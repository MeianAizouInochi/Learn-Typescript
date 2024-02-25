class Customer
{
    private _name:string;
    
    public get Name():string
    {
        return this._name;
    }

    public set Name(value:string)
    {
        this._name = value;
    }

}

let Obj = new Customer();

Obj.Name = "Hello";

console.log(Obj.Name);