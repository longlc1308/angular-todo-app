import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoComponent } from './edit-todo/edit-todo.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ToolTippyDirective } from './shared/directives/tool-tippy.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoComponent,
    ToolTippyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
