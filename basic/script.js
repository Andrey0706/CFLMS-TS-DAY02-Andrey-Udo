var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.print = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var person = new Person("Lionel", 32, "Footballer");
console.log(person.print());
console.log("---------------------\n basic2:\n");
var moreInfo = /** @class */ (function (_super) {
    __extends(moreInfo, _super);
    function moreInfo(name, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    moreInfo.prototype.printMore = function () {
        return _super.prototype.print.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return moreInfo;
}(Person));
var newPerson = new moreInfo("lionell", 32, "Footballer", "1000000000", "Barcelona");
var toPrint = newPerson.printMore();
console.log(toPrint);
