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
class Person {
    _personality;
    constructor(personality) {
        this._personality = personality;
    }
    async askQuestion() {
        console.log(`Personality: ${this._personality}`);
        const ask = await inquirer.prompt({
            name: 'response',
            type: 'list',
            message: `Are you an ${this._personality}? Type 1 for yes or 2 for no`,
            choices: ['1', '2']
        });
        if (ask.response === '1') {
            console.log(`You confirmed being an ${this._personality}`);
        }
        else if (ask.response === '2') {
            console.log(`You denied being an ${this._personality}`);
        }
    }
    getPersonality() {
        return this.askQuestion();
    }
}
async function main() {
    const hit = new Person('Introvert');
    const answer = await hit.getPersonality();
    console.log('Chosen response: ' + answer);
}
main();
//original one 
// class Person {
//     private _personality: string;
//     constructor(public personality: string) {
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
//         }else {
//             console.log("You are sill a mystery");
//         }
//         return ask.response;
//     }
// }
// async function main() {
//     const hit = new Person('Introvert');
//     const answer = await hit.askQuestion();
//     console.log('Chosen response: ' + answer);
// }
// main();
