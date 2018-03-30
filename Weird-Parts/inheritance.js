var Person = function () {

    firstName = 'Vittal';
    lastName = 'Kamkar';
    getFullName= function() {
                console.log(this.firstName + ' ' + this.lastName);
    }
}




var person = new Person();
console.log(person.firstName);