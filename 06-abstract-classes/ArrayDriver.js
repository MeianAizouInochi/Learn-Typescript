"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
//declare array of shapes
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var s = theShapes_1[_i];
    console.log(s.getInfo());
    console.log(s.calculatedArea());
    console.log();
}
