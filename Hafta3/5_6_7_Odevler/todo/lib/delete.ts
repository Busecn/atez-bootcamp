const conf = new(require('conf'));
const chalk = require("chalk");

const del = (text) =>  {
    const todoItem = conf.get('todo-items')
        .todoItems.find(item => item.text === text);
    if (!todoItem) {
        console.error(chalk.red(`İlgili text için kayıt bulunamadı = "${text}".`));
        return;
    }
    const todoItems = conf.get('todo-items')
        .filter(item => item.text !== text);
    conf.set('todo-items', todoItems);
    console.log(chalk.green(`"${text}" başarıyla silindi.`));
}

module.exports = del;