class Issue {
    constructor(
        title = 'No title',
        repositoryNameAssociated = 'No repo',
        status = false,
        numberOfComments = 0,
        labels = 'No labels',
        author = 'No author',
        dateCreated = 'No date',
        lastUpdated = 'No updated'
    ) {
        this.title = title;
        this.repositoryNameAssociated = repositoryNameAssociated;
        this.status = status;
        this.numberOfComments = numberOfComments;
        this.labels = labels;
        this.author = author;
        this.dateCreated = dateCreated;
        this.lastUpdated = lastUpdated;
    };

    getTitleAndAuthor() {
        return `${this.title} - ${this.author}`;
    }

    getGeneralInfo() {
        return `${this.status} - ${this.dateCreated} - ${this.lastUpdated}`;
    }
}

const issue = new Issue('Issue', 'My repo', true, 10, 'My labels', 'Enrique Mendoza', '04/14/2022', '03/15/2022');

console.log(`Author: ${issue.author}`);
console.log(issue.getGeneralInfo());
