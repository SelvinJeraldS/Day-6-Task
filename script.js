class Movie{

    constructor (title,studio,rating="PG"){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
     getPG(movies) {
    
      return movies.filter(movie => movie.rating === "PG");
  }
}
let  obj =new  Movie("Leo","Seven Screen Studios","4.5/5"); //new is a keyword used to craete a instance of a class
let obj2= new Movie("Casino Royal","EAN productions","PG13")

let movies=[ new Movie("Leo","7 Screen Studios","PG"),
new Movie("Black Adam","Warner Bros","PG"),
new Movie("Vikram","RajKAmalFilmProduction","PG"),
new Movie("Iron Man","Marvel Studios","PG13"),
new Movie("Justice League","DC Universe","UA"),
new Movie("Avengers infinity wars","Marvel Studios","UA"),
];


let Pgmovies=movies.filter(movie => movie.rating === "PG")
  console.log(Pgmovies)


let pgmovies= obj.getPG(movies);
console.log(pgmovies);
console.log(obj);
console.log(obj2)

class Person{

    constructor(name,age,gender,martial_status,contact,email="selvinjerald03@gmail.com"){

        this.name=name;
        this.age=age;
        this.gender=gender;
        this.martial_status=martial_status;
        this.contact=contact;
        this.email=email;
    }
}
let P_obj1=new Person("Jerald","25","Male","NOT Married",9840942950,"Selvinjerald@gmail.com");
let P_obj2=new Person("Jerald","25","Male","Not maried",9840942950)
console.log(P_obj1)
console.log(P_obj2)

class Car{

    constructor (Brand,model,type,selection,color,price){
        this.Brand=Brand;
        this.model=model;
        this.type=type;
        this.selection=selection;
        this.color=color;
        this.price=price;
        
        
    }
}

let c_obj=new Car("Verna","EX","Verna EX","Verna EX","Blue","8lacks");
console.log(c_obj);



class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    toString() {
      return `Circle[radius=${this.radius}, color=${this.color}]`;
    }
}  

let Circle_Obj=new Circle(50,"red");
console.log(Circle_Obj);
console.log( " Radius Of Circle : "+Circle_Obj.getRadius(),"\n","Color Of Circle : "+Circle_Obj.getColor(),"\n","Circle Area : "+Circle_Obj.getArea() ,"\n","Circle Color : " +Circle_Obj.getColor() ,"\n","Circumference of Circle: "+Circle_Obj.getCircumference(),"\n");


class UberPriceCalculator {
  constructor(baseFare, costPerMinute, costPerMile, bookingFee) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.bookingFee = bookingFee;
  }

  calculatePrice(distanceInMiles, timeInMinutes) {
      const fareBeforeFees = (this.costPerMinute * timeInMinutes) + (this.costPerMile * distanceInMiles) + this.baseFare;
      const totalFare = fareBeforeFees + this.bookingFee;
      return totalFare;
  }
}

const uberX = new UberPriceCalculator(100, 30, 1.75, 1.5);
const distance = 10; 
const time = 20; 
const price = uberX.calculatePrice(distance, time);
console.log("Estimated Uber X price:", price.toFixed(2)); 
