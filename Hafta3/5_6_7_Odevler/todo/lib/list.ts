const conf = new (require('conf'))();
const chalk = require("chalk");

const list = () => {
    const todoList = conf.get('todo-items');
    if (todoList && todoList.length > 0) {
        todoList.forEach((todo, index) => {
            const taskDescription = `${index + 1} : ${todo.text}`
            if (todo.checked) {
                console.log(chalk.green(taskDescription))
            } else {
                console.log(chalk.yellow(taskDescription))
            }
        })
    }
    else {
        console.log(chalk.red('You have no todo items'))
    }
}

module.exports = list;