class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade =year;
        this.scores = [];
        this.tardies = 0;
    }

    // Instance Methods
    fullName(){
        return `Call me ${this.firstName} ${this.lastName}`;
    }

    markLate(){
        this.tardies += 1;
        if(this.tardies > 3) return `YOU ARE EXPELLED`;
        return `you are ${this.tardies} times late`;
    }

    addScores(score){
        this.scores.push(score);
        return this.scores
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a, b){return a+b;});
        return sum/this.scores.length;
    }

}

const firstStudent = new Student("Amaan", "kohli", 3);
const secondStudent = new Student("Risha", "tulsani", 2);

firstStudent.addScores(91);
firstStudent.addScores(86);
firstStudent.addScores(78);

console.log(firstStudent.calculateAverage());