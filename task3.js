const fs = require('fs');

fs.readFile('log.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка чтения файла:', err);
        return;
    }
    const lines = data.split('\n');
    const stats = { INFO: 0, WARNING: 0, ERROR: 0 };
    const errors = [];

    lines.forEach(line => {
        const match = line.match(/\[(.*?)\] \[(.*?)\] (.*)/);
        if (match) {
            const [, date, type, message] = match;
            stats[type]++;
            if (type === 'ERROR') {
                errors.push(`[${date}] ${message}`);
            }
        }
    });

    console.log('Статистика по логам:');
    console.log(`INFO: ${stats.INFO}`);
    console.log(`WARNING: ${stats.WARNING}`);
    console.log(`ERROR: ${stats.ERROR}`);
    console.log('Список ошибок:');
    errors.forEach(error => console.log(error));
});