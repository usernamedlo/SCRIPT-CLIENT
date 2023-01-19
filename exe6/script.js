const users = [
    { name: 'John', mail: 'John@gmail.com'},
    { name: 'Bob', mail: 'Bob@gmail.com'},
    { name: 'Tom', mail: 'Tom@gmail.com'},
]

for (const user of users) {
    document.write(`<li>${user.name} - ${user.mail}</li>`);
}

document.write('<hr>');

for (let i = 0; i < users.length; i++) {
    document.write(`<li>${users[i].name} - ${users[i].mail}</li>`);
}

document.write('<hr>');

users.forEach(user => {
    document.write(`<li>${user.name} - ${user.mail}</li>`);
});