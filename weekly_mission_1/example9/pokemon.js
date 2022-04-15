class Pokemon {
    constructor (name) {
        this.name = name;
    }

    sayHello = () => {
        console.log(`Mi ${this.name} te saluda!`);
    }

    sayMessage = () => {
        console.log(`Mi pokemon ${this.name} dice: Heey!`);
    }
}

module.exports = Pokemon;