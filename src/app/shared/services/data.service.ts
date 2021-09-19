import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    new Todo('This is todo app!!', true),
    new Todo('Build a complete application using Angular! In this in-depth tutorial we will implement a modern User Interface and cover many other interesting topics such as component interaction, Angular Forms and displaying modal dialogs.'),
  ];

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  updateTodo(index:number, updateTodo: Todo){
    this.todos[index] = updateTodo;
  }

  deleteTodo(index:number){
    this.todos.splice(index, 1);
  }
}
