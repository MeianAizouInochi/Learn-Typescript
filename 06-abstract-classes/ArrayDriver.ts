import {Shape} from "./Shape";
import { Rectangle } from "./Rectangle";
import {Circle} from "./Circle";


let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,3,7);

//declare array of shapes
let theShapes:Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let s of theShapes)
{
    console.log(s.getInfo());
    console.log(s.calculatedArea());
    console.log();
}