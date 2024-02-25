import {Shape} from "./Shape";
import { Rectangle } from "./Rectangle";
import {Circle} from "./Circle";

let myShape = new Shape(10,15);

let myCircle = new Circle(5,10,20);

let myRectangle = new Rectangle(0,0,3,7);

//declare array of shapes
let theShapes:Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let s of theShapes)
{
    console.log(s.getInfo());
}