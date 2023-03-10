const conf = new(require('conf'));
const chalk = require("chalk");

const check = (text) => {
    const todoItems = conf.get('todo-items');
    const todoItem = todoItems.find(item => item.text === text);
    if (todoItem) {
        todoItem.checked = true;
        conf.set('todo-items', todoItems);
        console.log(chalk.green(`"${text}" seçeneği kaldırıldı.`));
    } else
        console.error(chalk.red(`İlgili "${text}" kaydı bulunamadı.`));
}

module.exports = check;