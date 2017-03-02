import { Task } from "./task";

class List {
  constructor (title) {
    this.title = title;
    this.tasks = [];
  }

  addTask (title, dueDate, priority) {
    var task = new Task({
      title: title,
      dueDate: dueDate,
      priority: priority || 1,
      completed: false
    });
    this.tasks.push(task);
    return task;
  }
}

export { List };
