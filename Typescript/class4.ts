class ClassOne
{
    pname : string;
    pmobile : number;
    constructor()
    {
        this.pname="Natesh";
        this.pmobile=9788221620;
    }
    pdata()
    {
        console.log("---- Parent Details ------");
        console.log("Name is :" +this.pname);
        console.log("Mobile Number is :" +this.pmobile);
    }
} //Parent Class End Here

class ClassTwo extends ClassOne //extends to combine class two with class one
{
    cname:string;
    cage:string;
    cgender:string;
    cedu:string;
    constructor()
    {
        super();
        this.cname="Padmini";
        this.cage="52 Years";
        this.cgender="Female";
        this.cedu="10 TH";
    }
    cdata()
    {
        console.log("------ Child Details ------");
        console.log("Child Name :"+this.cname);
        console.log("Child Age :"+this.cage);
        console.log("Child Gender :"+this.cgender);
        console.log("Child Education :"+this.cedu);
        console.log("Father Name : "+this.pname);
        console.log("Contact Number :"+this.pmobile);
    }
}

const obj = new ClassTwo();

obj.pdata();
obj.cdata();