import { Task } from "./task";

var nextTaskId = 0;

class List {
  constructor (title) {
    this.title = title;
    this.tasks = [];
  }

  findTask (htmlId) {
    var taskId = Number(htmlId.split("-")[1]);
    return this.tasks[taskId];
  }

  addTask (title, dueDate, priority) {
    var task = new Task({
      id: nextTaskId,
      title: title,
      dueDate: dueDate,
      priority: priority || 1,
      completed: false
    });
    nextTaskId += 1;
    this.tasks.push(task);
    return task;
  }
}

export { List };
