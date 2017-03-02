import $ from "jquery";

import { List } from "./models/list";
import { AppController } from "./controllers/app";

var todoForm = $(".add-task");
var todoContainer = $(".tasks");

var list = new List("Stuff I want to eat");
var app = new AppController(todoForm, todoContainer, list);

app.start();
