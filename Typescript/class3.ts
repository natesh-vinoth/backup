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
    updatedetails(a:string, b:number)
    {
        this.name=a;
        this.mobile=b;
        console.log("User Details Updated Successfully");
        this.userdetails();
    }
}

const object = new User(); //To Create Const of the class

object.userdetails(); //We are calling a function from class

object.updatedetails("Mr. Vinoth Kumar N",9788221620);