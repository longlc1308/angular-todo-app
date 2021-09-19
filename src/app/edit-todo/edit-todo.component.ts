import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Todo
  ) { }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
  onSubmit(form: NgForm){
    if(form.invalid) return

    const updateTodo = {
      ...this.item,
      ...form.value
    }
    this.dialogRef.close(updateTodo);
  }
}
