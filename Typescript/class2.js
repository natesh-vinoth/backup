var User //User Name starts with Capital
 = /** @class */ (function () {
    function User() {
        this.name = "Vinoth";
        this.mobile = 9790694891;
    }
    User.prototype.userdetails = function () {
        console.log("Full Name : " + this.name);
        console.log("Mobile Number : " + this.mobile);
    };
    return User;
}());
var object = new User(); //To Create Const of the class
object.userdetails(); //We are calling a function from class
console.log(object.name);
