import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private todoService: TodoService) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    })
  }

  saveTodo() {
    if (this.todoForm.invalid) {
      return;
    }
    let todo: Todo = this.todoForm.value;
    todo.lastModifiedDate = new Date();
    todo.createdDate = new Date();
    this.todoService.saveTodo(todo)
    .then(response => this.handleSuccessfulSaveTodo(response, todo))
    .catch(err => console.error(err));

  }
  handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo) {
    //enviar la informacion al todo list
    this.activeModal.dismiss({ todo: todo, id: response.id });
  }
}
