console.log("10")

const numb = 12;

var facto = 1;

var i=1;

while(i<=numb){
    facto = facto * i;
    i++;
}
console.log(facto);

function fact(n){
    if(n==0){
        return 1;
    }else{
        return n*fact(n-1);
    }
}
var res = fact(6);
console.log(res);

function prime(n){
    for (let i=2; i<n; i++){
        if(n%i==0){
            return "not a prime number"
        }
    } return "it is a prime number"
}
var prime1 = prime(4);
console.log(prime1);