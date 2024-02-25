import { Shape } from "./Shape";

export class Circle extends Shape
{
    private _radius:number;

    public get Radius():number
    {
        return this._radius;
    }

    public set Radius(value:number)
    {
        this._radius = value;
    }

    constructor(x:number, y:number, radius:number)
    {
        super(x,y);

        this._radius = radius;
    }

    getInfo():string
    {
        return super.getInfo() + `, radius=${this._radius}`;
    }
}