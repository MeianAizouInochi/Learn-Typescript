export class Customer
{
    private _firstName:string;

    constructor()
    {}

    public get FirstName():string
    {
        return this._firstName;
    }

    public set FirstName(value:string)
    {
        this._firstName = value;
    }
}