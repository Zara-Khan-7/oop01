"use strict";
class student {
    constructor(name, rollnumber, course, fees, duration) {
        this.name = name;
        this.rollnumber = rollnumber;
        this.course = course;
        this.fees = fees;
        this.duration = duration;
    }
    ;
}
;
let s1 = new student("Zara", 123, "IT", 1500, 6);
let s2 = new student("Rabz", 1234, "IT", 1500, 6);
let s3 = new student("Rabya", 12345, "IT", 1500, 6);
console.log(s1.name);
console.log(s2.course);
console.log(s3.duration);
