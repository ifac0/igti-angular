/** Tipagem */
function sumJs(a, b) {
    return a + b;
}

function sumTs(a: number, b: number): number {
    return a + b;
}

function sumAny(a: any, b: any): any {
    return a + b;
}

//sumJs('olá', 5);
//sumTs('olá', 5);
//sumAny('olá', 5);
sumTs(2, 5);

/** Variaveis */

let x = 5;
let y: number = 4;

sumTs(x, y);

/** Objetos */
function registerStudent(student: {id: number, name: string}) {

}

/** Interface */
interface Student {
    id: number,
    name: string,
    dateRegister?: string
}

function registerStudentV2(student: Student) {

}

registerStudent({id:1, name:'Paul'});

let student = {
    id: 1,
    name: 'Carl',
    dateRegister: '01/04/2000',
    class: 2
}

registerStudentV2(student);

/** Classes */
class Student {
    id: number;
    name: string;

    save () {

    }
}

let newStudent = new Student();
newStudent.save();
// newStudent.delete();