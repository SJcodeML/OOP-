import inquirer from "inquirer";
// class Person {
//     private _personality : string;
//     constructor (Mystery:string){
//         this._personality=Mystery
//     }
//     async askQuestion(){
//         const msg : string = "Type 1 for an Introvert or type 2 for an Extrovert";
//         const ask = await inquirer.prompt({
//               name : "personality",
//               type :"list" , 
//               message : msg,
//               choices : ["1" , "2"]
//             })
//               if (ask.personality === "1"){
//                 console.log("You are an Introvert ")
//             }else if (ask.personality === "2" ){
//                 console.log("You are an Extrovert");
//             }   
//             return ask.response   
// }
// }
// const hit = new Person ("fsd");
// async function main() {
//     const hit = new Person('fsd');
//     const answer = await hit.askQuestion();
//     console.log('Chosen response: ' + answer);
// }
// main();
// class Person {
//     private _personality: string;
//     constructor(personality: string) {
//         this._personality = personality;
//     }
//     async askQuestion() {
//         console.log(`Personality: ${this._personality}`);
//         const ask = await inquirer.prompt({
//             name: 'response',
//             type: 'list',
//             message: `Are you an ${this._personality}? Type 1 for yes or 2 for no`,
//             choices: ['1', '2']
//         });
//         if (ask.response === '1') {
//             console.log(`You confirmed being an ${this._personality}`);
//         } else if (ask.response === '2') {
//             console.log(`You denied being an ${this._personality}`);
//         }
//        
//     }
//     getPersonality (){
//         return this.askQuestion();
//     }
// }
// async function main() {
//     const hit = new Person('Introvert');
//     const answer = await hit.getPersonality();
//     console.log('Chosen response: ' + answer);
// }
// main();
//original one 
class Person {
    personality;
    // private _personality: string;
    constructor(personality) {
        // this._personality = personality;
        this.personality = personality;
    }
    async askQuestion() {
        const ask = await inquirer.prompt({
            name: 'response',
            type: 'list',
            message: `Are you an ${this.personality}? Type 1 for yes or 2 for no`,
            choices: ['1', '2']
        });
        if (ask.response === '1') {
            console.log(`You confirmed being an ${this.personality}`);
        }
        else if (ask.response === '2') {
            console.log(`You denied being an ${this.personality}`);
        }
        else {
            console.log("You are sill a mystery");
        }
        return ask.response;
    }
}
// async function main() {
//     const hit = new Person('Introvert');
//     const answer = await hit.askQuestion();
//     console.log('Chosen response: ' + answer);
// }
// main();
// class Student{
//     private _name :string
//     constructor (name : string ){
//         this._name = name;
//     }
//     get  (): string{
//         return this._name
//     }
//     async set  (name:string){
//         const nam = await inquirer.prompt ({
//             name : "name",
//             type : "input",
//             message : "What is your name?"
//         })
//        this._name = nam.name
//     }
// }
// const Mystudent = new Student ("sidra")
// console.log( Mystudent.set);
class Student {
    _name;
    constructor(name) {
        this._name = name;
    }
    get() {
        return this._name;
    }
    async set() {
        const response = await inquirer.prompt({
            name: "name",
            type: "input",
            message: "What is your name? "
        });
        this._name = response.name;
    }
}
// const myStudent = new Student("Sidra");
// myStudent.set().then(() => {
//     console.log(myStudent.get());
// });
class Program {
    person;
    student;
    constructor() {
        this.person = new Person('Mystery');
        this.student = new Student('Sidra');
    }
    async run() {
        await this.person.askQuestion();
        await this.student.set();
        console.log(`students name is  ${this.student.get()}`);
    }
}
async function main1() {
    const myProgram = new Program();
    await myProgram.run();
}
main1();
// This code defines a TypeScript class called `Program` that has a `person` property of type `Person` and a `student` property of type `Student`. In the constructor of the `Program` class, a new `Person` object with the behavior of an introvert is created and assigned to the `person` property, and a new `Student` object with the name 'Sidra' is created and assigned to the `student` property.
// The `Program` class also has an async method called `run`, which first asks a question to the `person` object by calling the `askQuestion` method on it using `await`. Then, it sets the student name by calling the `set` method on the `student` object using `await`. Finally, it logs the name of the student by calling the `get` method on the `student` object.
// Additionally, there is an asynchronous function named `main1` that creates an instance of the `Program` class and calls the `run` method on it using `await`.
// In summary, this code creates an instance of the `Program` class, where a person and a student are initialized. The program then interacts with the person and student objects by asking a question to the person and setting the student's name, and finally, it logs the student's name.
