/**
 * Created by mitchell on 2/27/14.
 */
function hello () {
    return "world";
}

function helloWorld() {
    return hello() + "again";
}

function myPrivateFunction(number) {
    return number +1;
}

function increment(number){
    return myPrivateFunction(number);
}
module.exports.helloworld = hello;
module.exports.helloworldAgain = helloWorld;
module.exports.increment = increment;