import {Shape} from "./Shape";
 export class Rectangle extends Shape
 {
    private _width: number;

    private _length: number;


     public get width(): number {
         return this._width;
     }
     public set width(value: number) {
         this._width = value;
     }


     public get length(): number {
         return this._length;
     }
     public set length(value: number) {
         this._length = value;
     }

     constructor(x:number, y:number, length:number,width:number)
     {
        super(x,y);
        this._width = width;
        this._length = length;
     }

     getInfo():string
     {
        return super.getInfo() + `width=${this._width}, length=${this._length}`;
     }

 }