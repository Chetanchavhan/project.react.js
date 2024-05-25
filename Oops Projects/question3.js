
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `${super.getDetails()}, Grade: ${this.grade}`;
    }
}


class GraduateStudent extends Student {
    constructor(name, age, grade, thesisTopic) {
        super(name, age, grade);
        this.thesisTopic = thesisTopic;
    }
    getDetails() {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }
}

let gradStudent = new GraduateStudent('Alice', 28, 'A', 'Artificial Intelligence');


console.log(gradStudent.getDetails()); 
``



// Person Class: Base class with name and age properties. Method getDetails returns name and age.
// Student Class: Extends Person. Adds grade property. Overrides getDetails to include grade.
// GraduateStudent Class: Extends Student. Adds thesisTopic property. Overrides getDetails to include thesis topic.
// Instance Creation: Creates a GraduateStudent instance and calls getDetails, which combines information from all three classes.