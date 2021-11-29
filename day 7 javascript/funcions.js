function show(){
    console.log("hallow ");
}
show()


let name="prasht" // outer variable
function show1(){
    let sname // local variable
    console.log(sname);
    console.log("chavan");

}
show1()
console.log(name);
//console.log(sname); // throw a error



// pasing the parameters
function name2(n){
    console.log(n);
}
name2("iron man")


// return the value

function retr(a,b){
    return a+b
}
console.log(retr(2,5));


//arrow function

let sum =(a,b) => a+b
console.log(sum(55,5))


let ab=()=>console.log("hey buddy");
ab()



