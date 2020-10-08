const fs = require('fs');

let taskList = [];

const saveDB = () => {
    let data = JSON.stringify(taskList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("Can't save", err);
    });
}

const loadDB = () => {
    try {
        taskList = require('../db/data.json');
    } catch (err) {
        taskList = [];
    }

}

const create = (description) => {

    loadDB();

    let task = {
        description,
        completed: false
    }

    taskList.push(task);
    saveDB();
    return task;
}

const list = () => {
    loadDB();
    return taskList;
}

const update = (description, completed = true) => {
    loadDB();
    let index = taskList.findIndex(task => task.description === description);

    if (index >= 0) {
        taskList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const delet = (description) => {
    loadDB();
    // Old form
    /*
    let index = taskList.findIndex(task => task.description === description);

    if (index >= 0) {
        const i = taskList.indexOf(index);
        taskList.splice(i, 1);
        saveDB();
        return true;
    } else {
        return false;
    }
    */

    // New form
    let newTaskList = taskList.filter(task => task.description !== description);

    if (taskList.length === newTaskList.length) {
        return false;
    } else {
        taskList = newTaskList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    list,
    update,
    delet
}