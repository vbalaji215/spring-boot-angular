import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos = [
  //   new Todo(1, 'Learn To Dance', false, new Date()),
  //   new Todo(2, 'Expert in Spring', false,new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ];
  todos: Todo[];

  constructor(private totoDataService: TodoDataService) { }

  ngOnInit() {
    this.totoDataService.retrieveAllTodos('balaji').subscribe(response => this.todos = response);
  }
}
