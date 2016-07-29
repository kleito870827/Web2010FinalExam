
class Task {
  constructor (owner, description){
    this.owner=owner;
    this.description=description;
    this.completed=completed;
    this.date=new Date();

}
  completed(){
    if(this.completed == true){
      return false;
    }else{
      return true;
    }
  }
}

class Student {
  constructor(firstName, lastName,Id ){
    this.firstName= firstName;
    this.lastName= lastName;
    this.Id=Id;
  }
}
class Assignment {
  constructor(Id, url,classwork,grade){
    this.Id=Id;
    this.classwork=classwork;
    this.grade=grade;
  }
}
class Gradebook {
  constructor(code, Id, Iname, array){
    this.code=code;
    this.Id=Id;
    this.Iname=Iname;
    this.array=[];
  }
  addAssignment(){
    this.array.push();
  }
  getAverage(){
    var sum = 0;
    for( var i = 0; i < this.array.length; i++ ){
        sum += this.array[i];
    }
    return sum/elmt.length;
      }
}

8- Node is a server-side JavaScript interpreter that changes the notion of how a server should work. His goal is to allow a
programmer to build highly scalable applications and write code that handles tens of thousands of simultaneous connections in
a just a physical machine.
9-
10- var x = array.filter(number => number % 2);

var y = array.map(function(m){
  return m++;
});
var z = array.reduce(function(q, r){
   return a * b;
 });
 const is a signal that the identifier won’t be reassigned.
 let is a signal that the variable may be reassigned.
 var may or may not be reassigned
 The rest parameter allows us to represent an indefinite number of arguments as an array.
 modules is refers to small units of independent, reusable code.
