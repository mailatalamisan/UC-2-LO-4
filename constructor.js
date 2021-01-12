var Car = function(maxSpeed, driver){

this.maxSpeed = maxSpeed;
this.driver = driver;
this.drive = function(speed, time){
    console.log(speed * time);
};
this.logDriver = function(){
    console.log("driver name is" + this.driver);
};

}
   
var myCar = new Car(70, "Homer");
var myCar2 = new Car(40, "Acer");
var myCar3 = new Car(10, "Ryan");
var myCar4 = new Car(90, "Gabby");

myCar.drive(30,5);
myCar3.logDriver();s







