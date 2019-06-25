class User //User Name starts with Capital
{
    name : string;
    mobile : number;
    constructor()
    {
        this.name="Vinoth";
        this.mobile=9790694891;
    }
    userdetails()
    {
        console.log("Full Name : " +this.name);
        console.log("Mobile Number : "+this.mobile);
    }
}

const object = new User(); //To Create Const of the class

object.userdetails(); //We are calling a function from class

console.log(object.name);