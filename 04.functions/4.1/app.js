function calcSurface (width,length) { // this function calculate the surface of a given width and length, in centimeters.
    return width * length ;
}

width = prompt("Insert width of rectangle (cm) :") ;
length = prompt("Insert length of rectangle (cm) :") ;

console.log("The surface of your rectangle is ",calcSurface(width,length),"cm.") ;