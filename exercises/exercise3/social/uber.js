class Uber {
    constructor(
        profile = {
            user: '',
            age: 0,
        },
        travel = {
            from: '',
            to: ''
        }
    ) {
        this.profile = profile;
        this.travel = travel;
    }

    get getName() {
        return this.profile.user;
    }

    getTravel() {
        return `From ${this.travel.from} to ${this.travel.to}`;
    }
}

const myProfile = {
    user: 'Enrique Mendoza',
    age: 23,
}

const myTravel = {
    from: 'Obregon',
    to: 'Hermosillo',
}

const ub = new Uber(myProfile, myTravel);

console.log(ub.getName);
console.log(ub.getTravel());