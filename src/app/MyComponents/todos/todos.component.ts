import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localsetItem: string | null;
  todos: Todo[];

  constructor() {
    this.localsetItem = localStorage.getItem("todos");
    if (this.localsetItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localsetItem);
    }


  }
  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
