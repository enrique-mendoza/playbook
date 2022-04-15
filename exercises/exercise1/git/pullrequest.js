const pullRequest = {
    title: 'My PR',
    author: 'Enrique Mendoza',
    branchName: 'main',
    dateCreated: '04/14/2022',
    status: true,
    repositoryNameAssociated: 'Launch-X',

    getStatus() {
        return this.status;
    },

    getTitleAndAuthor() {
        return `${this.title} - ${this.author}`;
    },
}

console.log(`Title: ${pullRequest.title}`);
console.log(`Branch name: ${pullRequest.branchName}`);
console.log(pullRequest.getStatus());