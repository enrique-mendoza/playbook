class Repo {
    constructor (
        name = 'No name',
        author = 'No author',
        language = 'en-us',
        numberOfCommits = 0,
        stars = 0,
        forks = 0,
        issues_open = 0,
        issues_close = 0
    ) {
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close = issues_close;
    }

    get getTotalIssue() {
        return this.issues_open + this.issues_close;
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`;
    }
};

const repo = new Repo('Backend', 'Enrique Mendoza', 'ja-jp', 10, 5, 299, 5, 5);

console.log(`Author: ${repo.author}`);
console.log(repo.getTotalIssue);
console.log(repo.getGeneralInfo());