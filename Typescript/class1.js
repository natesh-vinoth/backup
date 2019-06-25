var User //User Name starts with Capital
 = /** @class */ (function () {
    function User() {
    }
    User.prototype.userdetails = function () {
        console.log("Full Name : Vinoth Kumar N");
        console.log("Mobile Number : 9790694891");
    };
    return User;
}());
var object = new User(); //To Create Const of the class
object.userdetails(); //We are calling a function from class
console.log(object.name);
