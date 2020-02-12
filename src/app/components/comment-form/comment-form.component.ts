import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentModel} from '../../models/comment';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm: FormGroup;
  onSubmit: EventEmitter<CommentModel> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  private buildForm() {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      website: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

  openCreateMode(){
    this.buildForm();
  }

  submitForm() {
    console.log(this.commentForm);
    if (this.commentForm.valid) {
      const data: CommentModel = this.commentForm.value;
      this.onSubmit.emit(data);
      this.commentForm.reset();
      console.log('Success');
    } else {
      console.log('ERROR');
      const errors = JSON.stringify(this.commentForm.errors);
      alert(errors);
    }
  }

  ngOnInit() {
    //this.buildForm()
  }

}