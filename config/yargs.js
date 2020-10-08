const description = {
    demand: true,
    alias: "d",
    desc: "Task description"
}

const completed = {
    alias: "c",
    default: true,
    desc: "Mark as completed or pending the task"
}

const argv = require("yargs")
    .command("create", "Create task", { description })
    .command("update", "Update task", { description, completed })
    .command("delete", "Delete task", { description })
    .help().argv;

module.exports = {
    argv,
}