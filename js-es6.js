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

