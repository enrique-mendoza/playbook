const issue = {
    title: 'My Issue',
    repositoryNameAssociated: 'Launch-X',
    status: true,
    numberOfComments: 4,
    labels: '#issue',
    author: 'Enrique Mendoza',
    dateCreated: '04/14/2022',
    lastUpdated: '04/14/2022',

    getTitleAndAuthor() {
        return `${this.title} - ${this.author}`;
    },
    getGeneralInfo(){
        return `${this.status} - ${this.dateCreated} - ${this.lastUpdated}`;
    },
};

console.log(`Author name: ${issue.author}`);
console.log(`Total comments: ${issue.numberOfComments}`);
console.log(issue.getGeneralInfo());
