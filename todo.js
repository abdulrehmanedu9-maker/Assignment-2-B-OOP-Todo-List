class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    markCompleted() {
        this.completed = true;
    }
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(taskName) {
        if (!taskName || taskName.trim() === "") {
            console.log("Task name cannot be empty.");
            return;
        }
        let task = new Task(taskName);
        this.tasks.push(task);
        console.log(`Task "${taskName}" added successfully.`);
    }
    completeTask(taskName) {
        let task = this.tasks.find(t => t.name === taskName);
        if (!task) {
            console.log("Task not found.");
            return;
        }
        task.markCompleted();
        console.log(`Task "${taskName}" marked as completed.`);
    }
    deleteTask(taskName) {
        let index = this.tasks.findIndex(t => t.name === taskName);
        if (index === -1) {
            console.log("Task not found.");
            return;
        }
        this.tasks.splice(index, 1);
        console.log(`Task "${taskName}" deleted successfully.`);
    }
    showTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
            return;
        }
        console.log("\nTo-Do List:");
        this.tasks.forEach((task, index) => {
            console.log(
                `${index + 1}. ${task.name} - ${task.completed ? "Completed" : "Pending"}`
            );
        });
    }
}


// Testing

let myTodoList = new TodoList();

myTodoList.addTask("Complete Assignment");
myTodoList.addTask("Study JavaScript");

myTodoList.showTasks();

myTodoList.completeTask("Complete Assignment");

myTodoList.showTasks();

myTodoList.deleteTask("Study JavaScript");

myTodoList.showTasks();