import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { DataService } from '../shared/services/data.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  index: number;
  showValidators: boolean = false;
  constructor(
    private dataService: DataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onAdd(form : NgForm){
    if(form.invalid){
      this.showValidators = true;
    }
    else{
      this.dataService.addTodo(new Todo(form.value.text));
      form.reset();
    }
  }

  onTodoClick(item : Todo){
    item.completed = !item.completed;
  }

  onEditClick(item: Todo){
    this.index = this.todos.indexOf(item);

    let dialogRef = this.dialog.open(EditTodoComponent, {
      width: '700px',
      data: item
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.dataService.updateTodo(this.index, result)
      }
    })
  }

  onDeleteClick(item: Todo){
    const index = this.todos.indexOf(item)
    this.dataService.deleteTodo(index)
  }
}
