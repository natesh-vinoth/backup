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
    User.prototype.updatedetails = function (a, b) {
        this.name = a;
        this.mobile = b;
        console.log("User Details Updated Successfully");
        this.userdetails();
    };
    return User;
}());
var object = new User(); //To Create Const of the class
object.userdetails(); //We are calling a function from class
object.updatedetails("Mr. Vinoth Kumar N", 9788221620);
