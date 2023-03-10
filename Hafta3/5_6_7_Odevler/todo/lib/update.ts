const conf = new(require('conf'));
const chalk = require("chalk");
const update = (oldItemText, newItemText) => {
    const todoItems = conf.get('todo-items');
    const itemIndex = todoItems.findIndex((item) => item.text === oldItemText);
    if (itemIndex !== -1) {
        todoItems[itemIndex].text = newItemText;
        conf.set('todo-items', todoItems);
    }
    else {
        console.error(chalk.red('İlgili kayıt bulunamadı'));
        return;
    }

    console.log(chalk.green('Kayıt başarıyla güncellendi.'));
}

module.exports = update;