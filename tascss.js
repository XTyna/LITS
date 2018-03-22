//sum1(2, 3) => 5
function sum(a) {
  return function(b) {
  	return a+b;
  }
}

function sum1(a, b){
	return a+b;
}

//retFirst(2,3,4,5) => 3

function retFirst(a, b, c, d) {
	//return arguments[1];
	return b;
}

//retArgsCount(1,2) => 2; retArgs(2,2,2,2,2) => 5

function retArgsCount() {
	return arguments.length
}