function validate(){
    var name=document.myform.name.value;
    var firstpassword = document.myform.password.value;
    var secondpassword=document.myform.password2.value;
    
    if(name=="null"|| name==""){
        alert("The name can't be null"); 
        return false;
    } 
    else if(firstpassword.length<6){
        alert('Password must be 6 character long!!!');
        return false;
    }
    else if(firstpassword==secondpassword){
            return true;
        }
    else if(firstpassword!=secondpassword){
            alert("Both passwords must be same!");
            return flase;
    }
     
} 

//// Declare the class  
 
var emp=class{
    constructor(name,id){
        this.id=id;
        this.name=name;
    }
}; 
//Static Method 
class Student{
    constructor(){
        this.id=101;
        this.name='unnati';
    }
    static display()
    {
        return "Static method has been invoked";
    }

}
document.write(Student.display())
// Inheritance
class Employee{
    constructor(){
        this.id=101;
        this.name='unnati';
    }
    
    detail(){
        document.write(this.id+""+this.name+"<br/>")
    }
}
class Information extends Employee{
    constructor(age){
        super();
        this.age=age;
    } 
} 
var e1=new Employee();
 var e2=new Employee();  
var i1=new Information(21);
// e1.detail();
// e2.detail(); 
document.writeln("<br>"+i1.id+" "+i1.name+" "+i1.age);
    
//Abstaction in javascript 
function Vehicle(){
    this.vehicleName=vehicleName;
    throw new Error("you can not create the instance of object class");
}
Vehicle.prototype.draw=function(){
    return " vehicle name is:"+this.vehicleName;
} 
function Bike(vehicleName){
    this.vehicleName=vehicleName;
} 
Bike.prototype=Object.create(Vehicle.prototype);
var bike=new Bike('Honda');
document.writeln("<br/>"+bike.draw());