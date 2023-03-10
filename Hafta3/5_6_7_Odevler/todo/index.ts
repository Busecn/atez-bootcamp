const { program } = require('commander');
const create = require('./lib/create');
const list = require('./lib/list');
const del = require('./lib/delete');
const check = require('./lib/check');
const update = require('./lib/update');


program.command('create <todoItem>').description('Create new todo item').action((create))
program.command('list').description('list all todo items').action(list);
program.command('check <text>').description('Check todo item').action((check))
program.command('del <text>').description('Delete todo item').action((del))
program.command('update <taskName> <newTaskText>').description('Update todo item').action((update))

program.parse();