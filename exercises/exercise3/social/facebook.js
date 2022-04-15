class Facebook {
    constructor(
        user = 'No name',
        post = 'No post',
        biography = {
            birthdate : '',
            age: 0,
        }
    ) {
        this.user = user;
        this.post = post;
        this.biography = biography;
    }

    get getAge() {
        return this.biography.age;
    }

    getUserAndPost() {
        return `${this.user} posted:  ${this.post}`;
    }
}

const myBiography = {
    birthdate: '09/16/1998',
    age: 23,
};
const fb = new Facebook('Enrique Mendoza', 'Is my birthday!', myBiography);

console.log(`User: ${fb.user}`);
console.log(`Age: ${fb.getAge}`);
console.log(fb.getUserAndPost());
