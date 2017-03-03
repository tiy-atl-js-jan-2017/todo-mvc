class Task {
  constructor (options) {
    options = options || {};
    this.id = options.id;
    this.title = options.title;
    this.dueDate = options.dueDate;
    this.completed = options.completed;
    this.priority = options.priority;
  }

  toggleCompleted () {
    this.completed = !this.completed;
  }

  changePriority (priority) {
    this.priority = priority;
  }
}

export { Task };
