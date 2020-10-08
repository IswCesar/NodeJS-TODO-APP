const argv = require("./config/yargs").argv;

const todo = require('./to-do/to-do');
const colors = require("colors");

let command = argv._[0];

switch (command) {
    case 'create':
        console.log('Create task');
        let task = todo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        console.log('List tasks');
        let tasks = todo.list();
        for (let task of tasks) {
            console.log('======== TODO ========'.green);
            console.log(task.description);
            console.log(`State: ${task.completed}`);
            console.log('======== TODO ========'.green);
        }
        break;
    case 'update':
        console.log('Update task');
        let updated = todo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        console.log('Delete task');
        let deleted = todo.delet(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Command not found');
        break;
}