const facebook = {
    user: 'Enrique Mendoza',
    post: 'Is my birthday!',
    biography: {
        birthdate: '09/16/1998',
        country: 'Mexico',
        phone: '6441939023',
    },
}

console.log(`User: ${facebook.user}`);
console.log(`Biography: ${JSON.stringify(facebook.biography)}`);