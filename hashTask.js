const prompt = require('prompt-sync')({ sigint: true });
const students = [
    { name: "Jean-Luc Garza", score: 24 },
    { name: "Teddy Munoz", score: 79 },
    { name: "Georgia Ali", score: 17 },
    { name: "Vicky Calhoun", score: 8 },
    { name: "Awais Weaver", score: 65 },
    { name: "Athena Kline", score: 52 },
    { name: "Zacharia Whitaker", score: 38 },
    { name: "Clarice Davenport", score: 99 },
    { name: "Viktoria Flynn", score: 84 },
    { name: "Ianis Crossley", score: 20 },
    { name: "Johnnie Owens", score: 74 },
    { name: "Emily-Rose Erickson", score: 33 },
    { name: "Adeel Nieves", score: 100 },
    { name: "Dustin Villegas", score: 98 },
    { name: "Maxine Hughes", score: 65 },
    { name: "Bilaal Harding", score: 79 },
    { name: "Maddie Ventura", score: 71 },
    { name: "Leroy Rees", score: 44 },
    { name: "Wanda Frank", score: 73 },
    { name: "Margaux Herbert", score: 80 },
    { name: "Ali Rios", score: 70 },
    { name: "Nigel Santiago", score: 25 },
    { name: "Markus Greene", score: 78 },
    { name: "Harlan Parrish", score: 97 },
    { name: "Baran Davidson", score: 43 },
    { name: "Seth Rodriguezh", score: 67 },
    { name: "Diego Mayer", score: 100 },
];


class HashTable {
    constructor(classSize) {
        this.classSize = classSize;
        this.classes = { A: [], B: [], C: [], D: [], Other: [] };
    }

    addStudent = (student) => {
        let key = "";
        if (student.score >= 90)
            key = "A";
        else if (student.score >= 80)
            key = "B";

        else if (student.score >= 70)
            key = "C";

        else if (student.score >= 60)
            key = "D";

        else
            key = "Other";
        
        this.insert(key, student);
    }

    insert = (key, student) => {
        const classLength = this.classes[key].length;
        if (classLength < this.classSize) {
            this.classes[key].push(student);
        }
    }

    distributeStudents = () => students.forEach(student => this.addStudent(student));
    
}

const maxnumber = prompt("What is the maximum number of students for the class? ");

const hashTable = new HashTable(maxnumber);
hashTable.distributeStudents();
console.log(`classes list \n --------------`);
console.log(hashTable.classes);
