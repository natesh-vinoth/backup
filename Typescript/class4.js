var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassOne = /** @class */ (function () {
    function ClassOne() {
        this.pname = "Natesh";
        this.pmobile = 9788221620;
    }
    ClassOne.prototype.pdata = function () {
        console.log("---- Parent Details ------");
        console.log("Name is :" + this.pname);
        console.log("Mobile Number is :" + this.pmobile);
    };
    return ClassOne;
}()); //Parent Class End Here
var ClassTwo = /** @class */ (function (_super) {
    __extends(ClassTwo, _super); //extends to combine class two with class one
    function ClassTwo() {
        var _this = _super.call(this) || this;
        _this.cname = "Padmini";
        _this.cage = "52 Years";
        _this.cgender = "Female";
        _this.cedu = "10 TH";
        return _this;
    }
    ClassTwo.prototype.cdata = function () {
        console.log("------ Child Details ------");
        console.log("Child Name :" + this.cname);
        console.log("Child Age :" + this.cage);
        console.log("Child Gender :" + this.cgender);
        console.log("Child Education :" + this.cedu);
        console.log("Father Name : " + this.pname);
        console.log("Contact Number :" + this.pmobile);
    };
    return ClassTwo;
}(ClassOne //extends to combine class two with class one
));
var obj = new ClassTwo();
obj.pdata();
obj.cdata();
