const fs = require('fs');

fs.readFile('data.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }
    const lines = data.split('\n');
    const users = lines.slice(1).map(line => {
        const [name, age, city] = line.split(',');
        return { name, age: parseInt(age), city };
    });
    users.sort((a, b) => a.age - b.age);
    console.log(users);
});