class Zaznam {

    get fullName(){
        return `${this.firstName} ${this.secondName}`;
    }

    constructor(firstName, secondName, age, phoneNumber){
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    
}