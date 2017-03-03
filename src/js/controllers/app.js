import $ from 'jquery';

class AppController {
  constructor (form, container, list) {
    this.form = form;
    this.container = container;
    this.list = list;
  }

  formHandler (event) {
    console.log("this is: ", this);

    event.preventDefault();

    var title = $("#task-title").val();
    var dueDate = $("#task-due").val();
    var task = this.list.addTask(title, dueDate);

    console.log(task);
    console.log(this.list);

    var taskHtml = this.taskTemplate(task);
    this.container.append(taskHtml);
  }

  start () {
    // this.form.submit(this.formHandler.bind(this))
    this.form.submit((event) => this.formHandler(event));

    // this.form.submit((event) => {
    //   event.preventDefault();
    //   // things with this work the way i want
    //   // i have the app as my this, not some random thing or undefined
    // });
  }

  taskTemplate (task) {
    return `<li>${task.title}</li>`;
  }
}

export { AppController };
