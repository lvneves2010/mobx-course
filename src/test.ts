import {autorun, action, runInAction, makeAutoObservable} from "mobx";

// console.log('test works');
const waitForPromise = () => new Promise(res => setTimeout(res, 3000));




class Person {
    // @observable
    firstName: string;
    // @observable
    lastName: string;

    constructor(name: string, lastName: string) {
        this.firstName = name;
        this.lastName = lastName;
        makeAutoObservable(this)
    }

    @action
    updateFirstName(name: string) {
        this.firstName = name;
    }
    @action
    updateLastName(name: string) {
        this.lastName = name;
    }
    @action
    updateFullName(name: string, lastName: string){
        this.firstName =name;
        this.lastName =lastName;
    }
}

const newPerson = new Person('Leonardo', 'Neves');


autorun(() => {
    console.log(`Person Name:  ${newPerson.firstName} ${newPerson.lastName}`)
})

//metodo 3
// const updater = action(() => {
//     newPerson.firstName = 'Vinicius';
// })
// updater();


//metodo 2
runInAction(async () =>{
    newPerson.firstName = 'Vinicius';
    await waitForPromise();
    newPerson.lastName = 'Tolstoy';
})

//metodo 1
// newPerson.updateFirstName('Vinicius');
// newPerson.updateLastName('Tolstoy');
newPerson.updateFullName( 'Gustavo', 'Campos' )


export {};