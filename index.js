// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    set diameter(value){
        this.radius = value / 2
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }
    set circumference(value){
        this.diameter = value / Math.PI
    }

    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }

    set area(value){
        this.radius = Math.sqrt(value / Math.PI)
    }
}