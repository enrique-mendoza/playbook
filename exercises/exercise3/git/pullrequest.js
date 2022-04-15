class PullRequest {
    constructor(
        title = 'No title',
        author = 'No author',
        branchName = 'No branch',
        dateCreated = 'No date',
        status = false,
        repositoryNameAssociated = 'No repo'
    ) {
        this.title = title;
        this.author = author;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated =repositoryNameAssociated; 
    }

    get getStatus() {
        return this.status;
    }

    getTitleAndAuthor() {
        return `${this.title} - ${this.author}`;
    }
}

const pr = new PullRequest('My PR', 'Enrique Mendoza', 'main', '04/14/2022', true, 'Launch X');

console.log(`Author: ${pr.author}`);
console.log(`Status: ${pr.getStatus}`);
console.log(pr.getTitleAndAuthor());