let taskManager = (function taskManager(){
    let tasks = [];

function addTask(description){
    tasks.push(description);
}
    
function displayTasks() {
    console.log(tasks);
}
return {
    addTask: addTask,
    displayTasks: displayTasks
};
})();
taskManager.addTask("pick up kids");
taskManager.addTask("buy groceries");
taskManager.addTask("take out trash");
taskManager.displayTasks();