class Twitter {
    constructor(
        user = 'No name',
        trending_topic = 'No topic',
        hashtag = 'No hashtag'
    ) {
        this.user = user;
        this.trending_topic = trending_topic;
        this.hashtag = hashtag;
    } 

    get getUser() {
        return this.user;
    }
}

const tw = new Twitter('Enrique Mendoza', 'Will Smith', '#Punch');

console.log(tw.getUser);
console.log(tw.hashtag);