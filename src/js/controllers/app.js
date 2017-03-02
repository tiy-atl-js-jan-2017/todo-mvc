import $ from 'jquery';

class AppController {
  constructor (form, container, list) {
    this.form = form;
    this.container = container;
    this.list = list;
  }

  start () {
    var app = this;
    console.log("this is: ", this);

    this.form.submit(function (event) {
      console.log("this is: ", this);
      console.log("app is: ", app);

      event.preventDefault();

      var title = $("#task-title").val();
      var dueDate = $("#task-due").val();
      var task = app.list.addTask(title, dueDate);

      console.log(task);
      console.log(app.list);

      var taskHtml = app.taskTemplate(task);
      app.container.append(taskHtml);
    });
  }

  taskTemplate (task) {
    return `<li>${task.title}</li>`;
  }
}

export { AppController };
