class Town {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Town {
    constructor(name, buildYear, area, noOfTrees) {
        super(name, buildYear);

        this.noOfTrees = noOfTrees;
        this.area = area;

    }

    getTreeDensity() {
        const density = this.noOfTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }

}

class Street extends Town {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);

        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name} build in this ${this.buildYear} year, is a ${classification.get(this.size)} street`)
    }
}

const allParks = [
    new Park('Green park', 1980, 0.2, 215),
    new Park('National park', 1894, 2.9, 3153),
    new Park('Oak park', 1953, 0.4, 949),
];


const allStreets = [
    new Street('Ocean Avenue', 1999, 1.1, 4),
    new Street('Evergreen Street', 2008, 2.7, 2),
    new Street('4th Street', 2015, 0.8),
];


function calc(arr) {

    // reduce method will sum all the arrays values to one value 
    const sum = arr.reduce((accumulator, current, index, arr) => {
        return accumulator + current;
    });

    // destructuring 
    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('----------------PARK REPORT-------------------');

    //Density
    p.forEach(park => park.getTreeDensity());

    //Average Age of Town's park 
    const ages = p.map(el => (new Date().getFullYear()) - el.buildYear)
    // ES6 destructuring 
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks,  have an average age of ${avgAge} years`);

    //Name of the park which has more than 1000 trees 
    const i = p.map(el => el.noOfTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees `);
}


function reportStreets(s) {
    console.log('----------------STREETS REPORT-------------------');

    // total and average length of town's street
    const length = s.map(el => el.length);
    const [totalLen, averageLen] = calc(length);
    console.log(`Total Length of ${s.length} streets is ${totalLen} KM and average Length is ${averageLen} KM`);


    //size classification of all streets
    s.forEach(street => street.classifyStreet())
}


reportParks(allParks);
reportStreets(allStreets);