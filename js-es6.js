// arrow function

var t=[1,2,3].map(x=>x*2);
//=> [2,4,6]

//generate function

function *fib(){
  var a=0,b=1,c;
  while(1){
    yield a;
    c=a+b;
    a=b;
    b=c;
  }
}

var iter=fib();

// assignment

var [a,b]=[1,2];

//a=1;b=2

// default function argument

function log(name="Gio"){
  console.log(name);
}

var {name,age}={name:"Gio",age:20};
// name="Gio";age=20

//log() -> "Gio"

// object

var obj={
  foo(){
    
  },
  bar(){
  }
};


