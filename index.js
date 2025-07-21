//variables declare outside any function or block are in the global scope.
//they are accessible anywhere  in the script.
let x=10;
function send message(){
    console.log("Hai Js");
f    console.log(x);//Inside
}
sendMessage();
    console.log(x);//Outside

//function scope:
//only accessible in the function in which they are declared.    
function send message(){
    console.log("Hai Js");
f    console.log(x);//Inside
}
sendMessage();
    console.log(x);//Outside

//block scope
//The block scope of the variable means that the variable
//is accessible within the block that is between the curly braces.
function check{
    if(true){
        let name="webdevelopment";
        console.log(name);
    }
    console.log(name);
}
check()
    
//call back;
//A callback function in Javascript is a function that is passed as an argument to another function,
//and it is executed after the completion of that function.

//it is commonly used for:
//Handling asynchronous operations(like API calls,timeouts,or event handling)
//Customizing behaviour inside function.
function first(){
    console.log("This is my first function")
}
first()
function Second(callback){
    console.log("This is my second function")
    callback();
}
second(first)

 


