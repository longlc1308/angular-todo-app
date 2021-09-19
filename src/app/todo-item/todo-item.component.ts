import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import tippy from 'tippy.js';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;

  @Output() todoClick: EventEmitter<void> = new EventEmitter();
  @Output() editClick: EventEmitter<void> = new EventEmitter();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTodoClick(){
    this.todoClick.emit()
  }
  onEditClick(){
    this.editClick.emit()
  }
  onDeleteClick(){
    this.deleteClick.emit()
  }
}
