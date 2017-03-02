class Task {
  constructor (options) {
    options = options || {};
    this.title = options.title;
    this.dueDate = options.dueDate;
    this.completed = options.completed;
    this.priority = options.priority;
  }

  toggleComplete () {
    this.complete = !this.complete;
  }

  changePriority (priority) {
    this.priority = priority;
  }
}

export { Task };
